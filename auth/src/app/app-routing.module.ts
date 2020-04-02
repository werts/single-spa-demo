import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { CommonRouterOutletComponent } from './shared/components/common-router-outlet.components';
import { LoginComponent } from './login/login.component';


const routes: Routes = [{
  path: 'auth',
  component: CommonRouterOutletComponent,
  children: [{
    path: 'login',
    component: LoginComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '/'
  }]
})
export class AppRoutingModule { }
