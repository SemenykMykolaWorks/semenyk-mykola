import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { MainComponent } from './containers/main/main.component';
import { FirstPageComponent } from './containers/first-page/first-page.component';
import { SecondPageComponent } from './containers/second-page/second-page.component';
import { ThirdPageComponent } from './containers/third-page/third-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'first-page',
        component: FirstPageComponent
      },
      {
        path: 'second-page',
        component: SecondPageComponent
      },
      {
        path: 'third-page',
        component: ThirdPageComponent
      },
      {
        path: '**',
        redirectTo: 'first-page'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {}
