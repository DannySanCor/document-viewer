import { ViewerComponent } from './pages/viewer/viewer.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo:'viewer/view/',
    pathMatch:'full'
  },
  {
    path:'viewer/view/:id',
    component: ViewerComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
