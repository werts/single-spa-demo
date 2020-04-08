import { NgModule } from '@angular/core';

import { LazyTestComponent } from './test.component';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgZorroAntdModule
  ],
  exports: [],
  declarations: [LazyTestComponent],
  providers: [],
})
export class LazyTestModule { }
