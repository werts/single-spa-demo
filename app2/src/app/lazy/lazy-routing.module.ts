import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LazyTestComponent } from './test/test.component';
import { HelloComponent } from './tt';

const routes: Routes = [{
  path: '',
  children: [{
    path: 'test',
    component: LazyTestComponent
  }, {
    path: 'tt',
    component: HelloComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class LazyRoutingModule { }
