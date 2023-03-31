import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ViewerService {
  zoomValue = new BehaviorSubject<number>(100);
  imagesList = [
    {
      url: '../../../assets/documents/1.png',
      id: '1',
    },
    {
      url: '../../../assets/documents/2.png',
      id: '2',
    },
    { url: '../../../assets/documents/3.png', id: '3' },
    { url: '../../../assets/documents/4.png', id: '4' },
    { url: '../../../assets/documents/5.png', id: '5' },
  ];
  constructor() {}
  Zoom(event: string) {
    if (event === '+') {
      console.log(this.zoomValue);
      this.zoomValue.next(this.zoomValue.value + 4);
      return;
    }
    if (this.zoomValue.value > 0) {
      this.zoomValue.next(this.zoomValue.value - 4);
    }
  }
  getImage(id: any) {
    debugger;
    const image = this.imagesList.filter(item => item.id === id.id);
        console.log('Nuevo Objeto', image);
    return image;
  }
}
