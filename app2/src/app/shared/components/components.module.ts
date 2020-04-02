import { NgModule } from '@angular/core';
import { CommonRouterOutletComponent } from './router-outlet/router-outlet.component';
import { RouterModule } from '@angular/router';

const comps = [
  CommonRouterOutletComponent
]

@NgModule({
  imports: [
    RouterModule
  ],
  exports: [...comps],
  declarations: [
    ...comps
  ],
  providers: [],
})
export class SharedComponentsModule { }
