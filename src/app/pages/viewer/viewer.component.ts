import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ImageViewerComponent } from 'ngx-image-viewer';
import { ViewerService } from 'src/services/viewer.service';
@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent implements OnInit{
  @ViewChild('imageViewer') viewer!: ImageViewerComponent;
  fullscreen: boolean = false;
  imageIndex:any = 0;
  index:number = 0;
  config:any; 
  images:Array<string>;
  zoomActual:number = 100;
  constructor(private route:ActivatedRoute, private viewerService : ViewerService){
    this.route.params.subscribe(id => {
      this.imageIndex = id;
    });
    this.config = {
      btnClass: 'default', // The CSS class(es) that will apply to the buttons
      zoomFactor: 0.1, // The amount that the scale will be increased by
      containerBackgroundColor: '#ccc', // The color to use for the background. This can provided in hex, or rgb(a).
      wheelZoom: true, // If true, the mouse wheel can be used to zoom in
      allowFullscreen: true, // If true, the fullscreen button will be shown, allowing the user to entr fullscreen mode
      allowKeyboardNavigation: false, // If true, the left / right arrow keys can be used for navigation
      btnIcons: { // The icon classes that will apply to the buttons. By default, font-awesome is used.
        zoomIn: 'fa fa-plus',
        zoomOut: 'fa fa-minus',
        rotateClockwise: 'fa fa-repeat',
        rotateCounterClockwise: 'fa fa-undo',
        fullscreen: 'fa fa-arrows-alt',
      },
      btnShow: {
        zoomIn: true,
        zoomOut: true,
        rotateClockwise: true,
        rotateCounterClockwise: true,
        next: false,
        prev: false
      }
    };
    this.images = [];
    }
    async ngOnInit() {
      const data:any =  this.viewerService.getImage(this.imageIndex);
      this.images.push(data[0].url);
   
      console.log(this.images);
      this.Zoom();
    }
    ngOnChanges(){
      
    }
    Zoom() {
      debugger;
      console.log("entro");
      this.viewerService.zoomValue.subscribe((value)=>{
        console.log(value);
        this.zoomActual = value;
      })
    }
}
