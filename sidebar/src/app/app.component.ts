import { Component } from '@angular/core';
import { NzIconService } from 'ng-zorro-antd';
import { singleSpaPropsSubject } from 'src/single-spa/single-spa-props';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  isCollapsed = false;

  constructor(private iconSrv: NzIconService) {
    // @ts-ignore
    const publicPath = __webpack_public_path__;
    const publicPathSuffix = publicPath.endsWith('/') ? '' : '/';

    iconSrv.changeAssetsSource(`${publicPath}${publicPathSuffix}`);

    singleSpaPropsSubject.subscribe(res => {
      console.log(res)
    });
  }

  navigate(hash): void{
    location.hash = hash;
  }

  toggle(): void{
    this.isCollapsed = !this.isCollapsed;
  }
}
