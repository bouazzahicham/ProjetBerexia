import {AfterViewInit, Component, ElementRef, EventEmitter, Input, OnDestroy, Output, ViewChild} from '@angular/core';
import {PatchesService} from "../_services/patches.service";

@Component({
  selector: 'app-target-connector',
  templateUrl: './target-connector.component.html',
  styleUrls: ['./target-connector.component.css']
})
export class TargetConnectorComponent implements AfterViewInit, OnDestroy {

  @Input() name: string = '';
  @Input() parent: string = '';
  @Input() signal;
  @ViewChild('socket') socket: ElementRef;

  isSelected: boolean = false;

  constructor(private patches: PatchesService) {}

  centrePoint() {
      const x = this.socket.nativeElement.offsetLeft
          + (this.socket.nativeElement.offsetWidth / 2);

      const y = this.socket.nativeElement.offsetTop
          + (this.socket.nativeElement.offsetHeight / 2);

      return {x, y};
  }

  ngAfterViewInit()
  {
      this.patches.registerTarget(this.socket, this);
  }

  ngOnDestroy() {
      this.patches.deregisterTarget(this);
  }

}