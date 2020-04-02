import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-router-outlet',
  template: `<router-outlet></router-outlet>`
})
export class CommonRouterOutletComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
