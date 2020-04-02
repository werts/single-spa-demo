import { NgModule } from "@angular/core";

import { CommonRouterOutletComponent } from './common-router-outlet.components';
import { RouterModule } from '@angular/router';

const comps = [
  CommonRouterOutletComponent
];

@NgModule({
  imports: [
    RouterModule
  ],
  declarations: [
    ...comps
  ],
  exports: [
    ...comps
  ]
})
export class SharedComponentsModule { }
