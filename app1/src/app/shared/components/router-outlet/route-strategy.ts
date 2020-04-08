import { RouteReuseStrategy, DetachedRouteHandle, ActivatedRouteSnapshot } from '@angular/router';

export class CustomReuseStrategy implements RouteReuseStrategy {
  private handlers = {};

  private abc = 'app1';

  private hasInValidRoute(route: ActivatedRouteSnapshot) {
    return route.routeConfig.path === '**' || !route.routeConfig || route.routeConfig.loadChildren || route.routeConfig.children;
  }

  constructor() {
    console.log('app1 init');
  }

  get(url) {
    let result = this.handlers.hasOwnProperty(url) ? this.handlers[url] : null;

    return result;
  }

  /** 表示对所有路由允许复用 如果你有路由不想利用可以在这加一些业务逻辑判断 */
  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    if (this.hasInValidRoute(route)) return false;
    return true;
  }

  /** 当路由离开时会触发。按path作为key存储路由快照&组件当前实例对象 */
  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
    // console.debug('store======>', route, handle);
    if (handle === null) return;

    this.handlers[this.getUrl(route)] = handle;
  }

  /** 若 path 在缓存中有的都认为允许还原路由 */
  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    if (this.hasInValidRoute(route)) return false;
    const url = this.getUrl(route);
    const data = this.get(url);
    const ret = !!(data);

    return ret;
  }

  /** 从缓存中获取快照，若无则返回nul */
  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
    if (this.hasInValidRoute(route)) return null;

    // console.debug('retrieve======>', route);
    if (!this.handlers[this.getUrl(route)]) {
      return null;
    }

    return this.handlers[this.getUrl(route)];
  }

  /** 进入路由触发，判断是否同一路由 */
  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    let ret = future.routeConfig === curr.routeConfig;
    if (!ret) return false;

    const path = ((future.routeConfig && future.routeConfig.path) || '') as string;
    if (path.length > 0 && ~path.indexOf(':')) {
      const futureUrl = this.getUrl(future);
      const currUrl = this.getUrl(curr);
      ret = futureUrl === currUrl;
    }

    return ret;
  }

  getTruthRoute(route: ActivatedRouteSnapshot) {
    let next = route;
    while (next.firstChild) next = next.firstChild;
    return next;
  }

  getUrl(route: ActivatedRouteSnapshot): string {
    let next = this.getTruthRoute(route);
    const segments: string[] = [];
    while (next) {
      segments.push(next.url.join('/'));
      next = next.parent!;
    }
    const url =
      '/' +
      segments
        .filter(i => i)
        .reverse()
        .join('/');
    return url;
  }
}
