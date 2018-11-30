import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  ViewChild,
  OnInit
} from '@angular/core';

import * as _ from 'lodash';

import {Graph} from '../_models/graph'
@Component({
  selector: 'app-flowchart',
  templateUrl: './flowchart.component.html',
  styleUrls: ['./flowchart.component.css']
})
export class FlowchartComponent implements OnInit  {

  chart:Graph;
  showPatches: boolean = true;
  
  
  constructor() { }

  ngOnInit() {
  }

  

}
