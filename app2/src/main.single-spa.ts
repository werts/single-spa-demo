
import { enableProdMode, NgZone } from '@angular/core';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Router } from '@angular/router';
import { ɵAnimationEngine as AnimationEngine } from '@angular/animations/browser';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import singleSpaAngular from 'single-spa-angular';
import { singleSpaPropsSubject } from './single-spa/single-spa-props';

if (environment.production) {
  enableProdMode();
}

const lifecycles = singleSpaAngular({
  bootstrapFunction: singleSpaProps => {
    singleSpaPropsSubject.next(singleSpaProps);
    return platformBrowserDynamic().bootstrapModule(AppModule);
  },
  template: '<app2-root />',
  Router,
  NgZone,
  AnimationEngine,
  domElementGetter: () => document.getElementById('microApp2')
});

export const bootstrap = lifecycles.bootstrap;
export const mount = [() => Promise.resolve().then(() => {
  const ele = document.getElementById('microApp2');

  ele.style.display = 'block';
}), lifecycles.mount];

export const unmount = () => Promise.resolve().then(() => {
  const ele = document.getElementById('microApp2');

  ele.style.display = 'none';
});
