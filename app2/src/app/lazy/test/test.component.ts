import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'micro-app1-lazy-test',
  templateUrl: './test.component.html'
})
export class LazyTestComponent implements OnInit {
  hasList = false;
  list = [{
    name: '张三',
    desc: '这是张三的简介'
  }, {
    name: '李四',
    desc: '这是李四的简介'
  }];

  constructor(private msg: NzMessageService) { }

  ngOnInit() {
    this.msg.success('测试浏览器前进后退的组件钩子方法');
  }

  query(e: MouseEvent): boolean {
    this.hasList = true;
    e.preventDefault();
    e.stopPropagation();
    return false;
  }
}
