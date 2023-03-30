import { Component } from '@angular/core';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent {
  viewerOptions: any = {
    navbar: false,
    toolbar: {
      zoomIn: 4,
      zoomOut: 4,
      oneToOne: 4,
      reset: 4,
      prev: 4,
      play: {
        show: 4,
        size: 'large',
      },
      next: 4,
      rotateLeft: 4,
      rotateRight: 4,
      flipHorizontal: 4,
      flipVertical: 4,
    }
  };
  public onViewerReady(event: Event) {
    console.log('Viewer ready', event);
  }
}
