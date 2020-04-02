import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LazyTestComponent } from './test/test.component';

const routes: Routes = [{
  path: '',
  children: [{
    path: 'test',
    component: LazyTestComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class LazyRoutingModule { }
