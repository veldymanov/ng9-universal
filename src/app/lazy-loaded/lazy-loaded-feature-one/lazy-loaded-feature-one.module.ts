import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyLoadedFeatureOneRoutingModule } from './lazy-loaded-feature-one-routing.module';

import { LazyLoadedFeatureOneComponent } from './lazy-loaded-feature-one.component';


@NgModule({
  imports: [
    CommonModule,
    LazyLoadedFeatureOneRoutingModule
  ],
  declarations: [
    LazyLoadedFeatureOneComponent
  ]
})
export class LazyLoadedFeatureOneModule { }
