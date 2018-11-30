import { Component, OnInit } from '@angular/core';



declare var document: any;
@Component({
  selector: 'app-transformaion',
  templateUrl: './transformaion.component.html',
  styleUrls: ['./transformaion.component.css']
})
export class TransformaionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

   createSelectNode(){
    var svgchart= document.getElementById('svg-chart');
    svgchart.insertAdjacentHTML('beforeend',
    `<rect x="50" y="20" width="150" height="150"
    style="fill:blue;stroke:pink;stroke-width:5;opacity:0.5" />`
    );

   }

}
