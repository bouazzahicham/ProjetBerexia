import { Component, OnInit } from '@angular/core';
import { DynamicScriptLoaderService,ModalService } from './_services/'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'clientWeb';
  constructor(private dynamicScriptLoader: DynamicScriptLoaderService,private modalService: ModalService){}

  ngOnInit(){
    //this.loadChartScripts();
  }
 
  openModal(id: string) {
    this.modalService.open(id);
}

closeModal(id: string) {
    this.modalService.close(id);
}
  private loadChartScripts() {
    // You can load multiple scripts by just providing the key as argument into load method of the service
    this.dynamicScriptLoader.load('materializejs').then(data => {
      // Script Loaded Successfully
    }).catch(error => console.log(error));
  }
}
