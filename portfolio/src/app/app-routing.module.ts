import { HomeViewComponent } from './../components/home-view/home-view.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'Home',
    component: HomeViewComponent
  },
  // {
  //   path: 'Experience'
  // },
  // {
  //   path: 'Projects'
  // },
  // {
  //   path: 'Designs'
  // },
  // {
  //   path: 'Contact'
  // },
  {
    path: '',
    redirectTo: 'Home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
