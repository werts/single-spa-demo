import { NgModule } from '@angular/core';

import { LazyRoutingModule } from './lazy-routing.module';
import { LazyTestModule } from './test/test.module';
import { SharedComponentsModule } from '../shared/components/components.module';

@NgModule({
  imports: [
    LazyTestModule,
    SharedComponentsModule,
    LazyRoutingModule
  ],
  exports: [],
  declarations: [],
  providers: [],
})
export class LazyModule { }
