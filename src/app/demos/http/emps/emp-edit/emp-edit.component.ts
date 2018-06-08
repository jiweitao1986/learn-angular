import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/do';

import { NgModel, NgForm } from '@angular/forms';
import { Emp, Job, Edu, EmpDataSet } from '../shared/models';

@Component({
    selector: 'app-emp-edit',
    templateUrl: './emp-edit.component.html'
})

class EmpEditComponent implements OnInit {

    /**
     * url
     */
    private url = 'http://192.168.171.128:8080/emps/';

    /**
     * 请求结果
     */
    private data: EmpDataSet = { Emp: [], Edu: [], Job: []};

    /**
     * 构造函数
     * @param http
     */
    constructor(
      private http: HttpClient,
      private route: ActivatedRoute,
      private router: Router
    ) {
    }


    ngOnInit() {
      this.route.paramMap.do(
        (params: ParamMap) => {
          console.log(params.get('id'));
          this.loadData(params.get('id'));
        }
      ).subscribe(() => {
        console.log(this.data);
      });
    }

    /**
     * 新增
     */
    private loadData(id: string) {
      const url = this.url + id;
      this.http.get(url).subscribe((result: EmpDataSet) => {
          this.data = result;
      });
    }

    /**
     * 保存
     */
    private save(): void {
      this.http.post(this.url, this.data).subscribe((result) => {
        console.log(result);
      });
      console.log(this.data);
    }
}


export { EmpEditComponent };
