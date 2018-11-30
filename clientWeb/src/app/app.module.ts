import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DynamicScriptLoaderService} from './_services'
import {HttpClient, HttpClientModule} from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalComponent } from './_directives';
import { ModalService } from './_services';
import { UploaderComponent } from './uploader/uploader.component';
import { FlowchartComponent } from './flowchart/flowchart.component';
import { TransformaionComponent } from './transformaion/transformaion.component';
import { NodeComponent } from './node/node.component';
import { ConnectorComponent } from './connector/connector.component';
import { SourceConnectorComponent } from './source-connector/source-connector.component';
import { TargetConnectorComponent } from './target-connector/target-connector.component';
import {PatchesService}  from './_services/patches.service';
import { PatchOverlayComponent } from './patch-overlay/patch-overlay.component'

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    UploaderComponent,
    FlowchartComponent,
    TransformaionComponent,
    NodeComponent,
    ConnectorComponent,
    SourceConnectorComponent,
    TargetConnectorComponent,
    PatchOverlayComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [DynamicScriptLoaderService,ModalService,HttpClient,PatchesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
