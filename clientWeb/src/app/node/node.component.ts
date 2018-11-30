import { Component, OnInit,Input,ElementRef,ViewChild } from '@angular/core';

import {
  Observable,
  fromEvent,
  combineLatest,
  Subscription
  } 
  from "rxjs";

import { switchMap, map, filter, debounceTime,take,skipUntil, tap, switchAll,startWith,mergeMap} from 'rxjs/operators';

import { DynamicScriptLoaderService } from '../_services/dynamic-script-loader-service.service';


import {Node} from '../_models/node'
@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.css']
})
export class NodeComponent implements OnInit {

  draggable: Subscription;
  menu: Subscription;
  @Input() node:Node;
  isPatching:boolean=false;
  StartX:number=0;
  StartY:number=0;
  @ViewChild('nodeEl') nodeEl: ElementRef;
  menuActive: boolean = false;
  constructor() { }

  ngOnInit() {

    
  }




  // ngAfterViewInit() {
  //   this.menu =fromEvent(this.nodeEl.nativeElement, 'mousedown').pipe(
  //     filter((e: MouseEvent) => ((e.which && e.which == 3) || (e.button && e.button == 2))),
  //     tap((e: MouseEvent) => e.preventDefault()),
  //   ).subscribe(() => this.menuActive = true)


  //   const down = fromEvent(this.nodeEl.nativeElement, 'mousedown').pipe(
  //        filter((e: MouseEvent) => !((e.which && e.which == 3) || (e.button && e.button == 2))),
  //        tap((e: MouseEvent) => e.preventDefault()),
  //        tap((e: MouseEvent) => this.startPatch(this.nodeEl, e)),

  //     // tap((e: MouseEvent) => {
       
  //     // })
  //   );

  //   const up = fromEvent(document, 'mouseup').pipe(
  //     tap((e: MouseEvent) => e.preventDefault())
  //   );

  //   const mouseMove = fromEvent(document, 'mousemove').pipe(
  //     tap((e: MouseEvent) => e.stopPropagation())
  //   )
  //   const scrollWindow = fromEvent(document, 'scroll').pipe(
  //     startWith({})
  //   );
  //   const move  = combineLatest(mouseMove, scrollWindow);

  //   const drag = down.pipe(mergeMap((md: MouseEvent) => {
  //     //alert("drag");
  //       return move.pipe(
  //           map(([mm, s]) => mm),
  //           tap((mm: MouseEvent) => {
  //               this.movePatch(mm);
              
  //           }),
  //           skipUntil(up.pipe(
  //               take(1),
  //               tap(() => {this.endPatch()}))
  //               ),
  //           take(1),
  //   )
        
  //   })
  //   );
    

  //   this.draggable = drag.subscribe((e: MouseEvent) => {
  //     this.movePatch(e);
  //   });
  // }

  // public startPatch(el: ElementRef, e: MouseEvent)
  // {
  //     this.StartX=e.clientX-this.StartX;
  //     this.StartY=e.clientY-this.StartY;
  //     this.isPatching = true;
  // }

  // public movePatch(mm: MouseEvent)
  // {
  //   if(this.isPatching){

  //     this.StartX = mm.clientX-this.StartX;
  //       this.StartY = mm.clientY-this.StartY;
  //   }
  //     // this.nodeEl.nativeElement.offsetTop=mm.clientY-this.StartY;
  //     // this.nodeEl.nativeElement.offsetLeft=mm.clientX-this.StartX;
    
  // }

  // public endPatch()
  // {
  //     this.isPatching = false;
  // }
  // setMyStyles() {
  //   let styles = {
  //     'top': this.StartY+'px',
  //     'left': this.StartX+'px'
  //   };
  //   return styles;
  //[ngStyle]="setMyStyles()"
  // }
}
