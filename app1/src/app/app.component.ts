import { Component } from '@angular/core';
import { NzIconService } from 'ng-zorro-antd';

@Component({
  selector: 'app1-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  constructor(private iconSrv: NzIconService) {
    // @ts-ignore
    const publicPath = __webpack_public_path__;
    const publicPathSuffix = publicPath.endsWith('/') ? '' : '/';

    this.iconSrv.changeAssetsSource(`${publicPath}${publicPathSuffix}`);
  }

  isVisible = false;

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
}
