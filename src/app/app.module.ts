import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewerComponent } from './pages/viewer/viewer.component';
import {ImageViewerModule} from 'ngx-image-viewer'
@NgModule({
  declarations: [
    AppComponent,
    ViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   ImageViewerModule.forRoot()
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
