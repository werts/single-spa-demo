import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonRouterOutletComponent } from './shared/components/router-outlet/router-outlet.component';
import { APP_BASE_HREF } from '@angular/common';
import { EmptyRouteComponent } from './empty-route/empty-route.component';


const routes: Routes = [{
  path: 'app2',
  component: CommonRouterOutletComponent,
  children: [{
    path: 'lazy',
    loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule)
  }]
}, {
  path: '**',
  component: EmptyRouteComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '/'
  }],
})
export class AppRoutingModule { }
