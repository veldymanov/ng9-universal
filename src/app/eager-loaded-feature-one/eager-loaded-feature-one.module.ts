import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { EagerLoadedFeatureOneComponent } from './eager-loaded-feature-one.component';

@NgModule({
  declarations: [EagerLoadedFeatureOneComponent],
  imports: [
    SharedModule
  ]
})
export class EagerLoadedFeatureOneModule { }
