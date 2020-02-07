import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LazyLoadedFeatureOneComponent } from './lazy-loaded-feature-one.component';

const routes: Routes = [
  {
    path: '',
    component: LazyLoadedFeatureOneComponent,
    // children: [ ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyLoadedFeatureOneRoutingModule { }
