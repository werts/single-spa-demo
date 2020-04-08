import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hello-tt',
  template: `<a [routerLink]="['/app2/lazy/test']" routerLinkActive="router-link-active" >asfdasfdsadfsa</a>
  <input>`
})

export class HelloComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
