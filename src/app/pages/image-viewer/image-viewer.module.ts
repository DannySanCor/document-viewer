import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageViewerComponent } from './image-viewer.component';
import { ImageViewerConfig } from './image-viewer-config.model';
import { ToggleFullscreenDirective } from './fullscreen.directive';
import { ViewerComponent } from '../viewer/viewer.component';


@NgModule({
  declarations: [ImageViewerComponent,
    ToggleFullscreenDirective,
  ViewerComponent],
  imports: [
    CommonModule
  ]
})
export class ImageViewerModule { 
  static forRoot(config?: ImageViewerConfig) {
    return {
      ngModule: ImageViewerModule,
      providers: [{provide: 'config', useValue: config}]
    };
  }}
