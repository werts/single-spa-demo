import { NgModule } from '@angular/core';

import { LazyTestComponent } from './test.component';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule
  ],
  exports: [],
  declarations: [LazyTestComponent],
  providers: [],
})
export class LazyTestModule { }
