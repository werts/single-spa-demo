import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { CommonRouterOutletComponent } from './shared/components/router-outlet/router-outlet.component';


const routes: Routes = [{
  path: 'app1',
  component: CommonRouterOutletComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '/'
  }],
  declarations: [
    CommonRouterOutletComponent
  ]
})
export class AppRoutingModule { }
