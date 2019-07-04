import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgModel, NgForm } from '@angular/forms';

import { Emp } from '../shared/models';
@Component({
    selector: 'app-emp-list',
    templateUrl: './emp-list.component.html'
})

class EmpListComponent implements OnInit {

    /**
     * url
     */
    private url = 'http://192.168.171.128:8080/emps';

    /**
     * 请求结果
     */
    private emps: any;

    /**
     * 构造函数
     * @param http
     */
    constructor(private http: HttpClient, private router: Router) {
    }

    ngOnInit() {
      this.loadData();
    }

    /**
     * 加载数据
     */
    private loadData(keyword?: string, ctrl?: NgModel, form?: NgForm): void {
      // console.log(keyword);
      // console.log(ctrl);
      // console.log(form);
      this.http.get(this.url).subscribe(result => {
          this.emps = result['Emp'];
      });
    }

    /**
     * 删除
     */
    private remove(id: string) {
      const url = this.url + id
      this.http.delete(this.url).subscribe(result => {
        console.log(result);
      });
    }

    private add() {
      this.router.navigateByUrl('/http/emp-add');
    }
}


export { EmpListComponent };
