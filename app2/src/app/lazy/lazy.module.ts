import { NgModule } from '@angular/core';

import { LazyRoutingModule } from './lazy-routing.module';
import { LazyTestModule } from './test/test.module';
import { SharedComponentsModule } from '../shared/components/components.module';
import { HelloComponent } from './tt';

@NgModule({
  imports: [
    LazyTestModule,
    SharedComponentsModule,
    LazyRoutingModule
  ],
  exports: [],
  declarations: [
    HelloComponent
  ],
  providers: [],
})
export class LazyModule { }
