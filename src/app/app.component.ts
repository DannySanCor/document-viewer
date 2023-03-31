import { Component, OnInit } from '@angular/core';
import { ViewerService } from 'src/services/viewer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'document-viewer';
  zoom: number;
  constructor(private viewerService: ViewerService){

  }
  ngOnInit(): void {
    this.viewerService.zoomValue.subscribe((value)=>{
      console.log(value);
      this.zoom = value;
    })
  }
  zoomOption(event:string) {
    this.viewerService.Zoom(event);
  }

}
