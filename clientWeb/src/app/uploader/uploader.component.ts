import { Component, OnInit, ViewChild } from '@angular/core';
import { UploadService} from '../_services'
import {ModalService} from '../_services'
import { forkJoin } from 'rxjs/'


declare var document: any;
@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.css']
})
export class UploaderComponent implements OnInit {

  
  progress;
  canBeClosed = true;
  primaryButtonText = 'Upload';
  showCancelButton = true;
  uploading = false;
  uploadSuccessful = false;
  @ViewChild('file') file;
  fileName:String=""
  progressPercent:any;
  
  constructor(public uploadService: UploadService,private modalService: ModalService) { }

  ngOnInit() {
  }
   
  startUpload(){
    
    if (this.uploadSuccessful) {
      return this.closeModal('upload-modal');
    }
    this.uploading = true;
    this.fileName = this.file.nativeElement.files[0].name;
    this.progress = this.uploadService.upload(this.file.nativeElement.files[0]);
    console.log(this.progress);
    
    for (const key in this.progress) {
      this.progress[key].progress.subscribe(val => {console.log(val); this.progressPercent=val; });
    }

    let allProgressObservables = [];
    for (let key in this.progress) {
      allProgressObservables.push(this.progress[key].progress);
    }
    this.primaryButtonText = 'Finish';

    this.canBeClosed = false;
  
    this.showCancelButton = false;

    var filesZone = document.getElementById('files-zone');
      filesZone.insertAdjacentHTML('beforeend',
      `<div class="icon-preview col s6 m3 center"> 
      <img class="csv-icon" src="https://cdn2.iconfinder.com/data/icons/file-formats-4-1/100/file_formats_4_csv-512.png"/>
      <span>work</span></div>`
      );

    forkJoin(allProgressObservables).subscribe(end => {
    
      this.canBeClosed = true;
    
      this.uploadSuccessful = true;
    
      this.uploading = false;

  });
  }

openModal(id: string) {
    this.modalService.open(id);
}

closeModal(id: string) {
     if(this.canBeClosed)
    this.modalService.close(id);
}
  
}
