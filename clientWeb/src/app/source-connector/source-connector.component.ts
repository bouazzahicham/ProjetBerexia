import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  ViewChild
} from '@angular/core';

import * as _ from 'lodash';

import {
  Observable,
  fromEvent,
  combineLatest
  } 
  from "rxjs";

import { switchMap, map, filter, debounceTime,take,skipUntil, tap, switchAll,startWith,mergeMap} from 'rxjs/operators';


import {
  PatchesService
} from "../_services/patches.service";
import {
  ConnectorComponent
} from "../connector/connector.component";
import {
  Subscription
} from "rxjs/";


@Component({
  selector: 'app-source-connector',
  templateUrl: './source-connector.component.html',
  styleUrls: ['./source-connector.component.css']
})
export class SourceConnectorComponent implements AfterViewInit, OnDestroy {

  @Input() name: string;
  @Input() signal;
  @ViewChild('socket') socket: ElementRef;
  @ViewChild('cable') cable: ConnectorComponent;

  draggable: Subscription;
  menu: Subscription;
  menuActive: boolean = false;

  constructor(private patches: PatchesService) {}

  centrePoint() {
    const x = this.socket.nativeElement.offsetLeft +
      (this.socket.nativeElement.offsetWidth / 2);

    const y = this.socket.nativeElement.offsetTop +
      (this.socket.nativeElement.offsetHeight / 2);

    return {
      x,
      y
    };
  }

  get targets() {
    const s = this.patches.getConnectionsFor(this);
    return _.map(s, ({
      target
    }, i) => `${i}:${target.parent}:${target.name}`);
  }
  removeConnectionTotarget(i) {
    this.menuActive = false;
    const olds = this.patches.removeConnectionsFor(this);
    
    // _.map(olds, o => this.signal.disconnect(o.signal));
  }

  ngAfterViewInit() {
    this.menu =fromEvent(this.socket.nativeElement, 'mousedown').pipe(
      filter((e: MouseEvent) => ((e.which && e.which == 3) || (e.button && e.button == 2))),
      tap((e: MouseEvent) => e.preventDefault()),
    ).subscribe(() => this.menuActive = true)


    const down = fromEvent(this.socket.nativeElement, 'mousedown').pipe(
      filter((e: MouseEvent) => !((e.which && e.which == 3) || (e.button && e.button == 2))),
      tap((e: MouseEvent) => e.preventDefault()),
      tap((e: MouseEvent) => this.cable.startPatch(this.socket, e)),

      tap((e: MouseEvent) => {
       
      })
    );

    const up = fromEvent(document, 'mouseup').pipe(
      tap((e: MouseEvent) => e.preventDefault())
    );

    const mouseMove = fromEvent(document, 'mousemove').pipe(
      tap((e: MouseEvent) => e.stopPropagation())
    )
    const scrollWindow = fromEvent(document, 'scroll').pipe(
      startWith({})
    );
    const move  = combineLatest(mouseMove, scrollWindow);

    const drag = down.pipe(mergeMap((md: MouseEvent) => {
        return move.pipe(
            map(([mm, s]) => mm),
            tap((mm: MouseEvent) => {
                this.cable.movePatch(mm);
                this.patches.resetSelection();
                const target = this.patches.locateTarget(mm);
                if (target) {
                    target.isSelected = true;
                }
            }),
            skipUntil(up.pipe(
                take(1),
                tap(() => this.cable.endPatch()))
                ),
            take(1),
    )
        
    })
    );
    

    this.draggable = drag.subscribe((e: MouseEvent) => {
      const target = this.patches.locateTarget(e);
      if (target && this.patches.notConnected(this, target)) {
        this.patches.connect(this, target);
        //this.signal.connect(target.signal);
      }
      this.patches.resetSelection();
    });
  }

  ngOnDestroy() {
    const old = this.patches.removeConnectionsFor(this);
    // this.signal.disconnect(old.signal);
    this.draggable.unsubscribe();
    this.menu.unsubscribe();
  }
}
