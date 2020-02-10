import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { LazyLoadedFeatureOneRoutingModule } from './lazy-loaded-feature-one-routing.module';

import { LazyLoadedFeatureOneComponent } from './lazy-loaded-feature-one.component';


@NgModule({
  imports: [
    SharedModule,
    LazyLoadedFeatureOneRoutingModule
  ],
  declarations: [
    LazyLoadedFeatureOneComponent
  ]
})
export class LazyLoadedFeatureOneModule { }
