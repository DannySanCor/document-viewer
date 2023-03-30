import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewerComponent } from './pages/viewer/viewer.component';
import { NgxViewerModule } from 'ngx-viewer';
@NgModule({
  declarations: [
    AppComponent,
    ViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [NgxViewerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
