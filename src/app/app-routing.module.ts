import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router, PreloadAllModules } from '@angular/router';

import { EagerLoadedFeatureOneModule } from './eager-loaded-feature-one/eager-loaded-feature-one.module';

import { EagerLoadedFeatureOneComponent } from './eager-loaded-feature-one/eager-loaded-feature-one.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'eager-loaded-first',
    component: EagerLoadedFeatureOneComponent
  },
  {
    path: 'lazy-loaded-first',
    // tslint:disable-next-line: max-line-length
    loadChildren: () => import('./lazy-loaded/lazy-loaded-feature-one/lazy-loaded-feature-one.module').then(m => m.LazyLoadedFeatureOneModule),
  },
  { path: '**',  component: NotFoundComponent }
];

@NgModule({
  imports: [
    EagerLoadedFeatureOneModule,
    RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    // enableTracing: true, // <-- debugging purposes only
    // preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    // console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
