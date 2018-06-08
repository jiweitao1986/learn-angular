import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgModel, NgForm } from '@angular/forms';
import { Emp, Job, Edu, EmpDataSet } from '../shared/models';

@Component({
    selector: 'app-emp-add',
    templateUrl: './emp-add.component.html'
})

class EmpAddComponent implements OnInit {

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
    constructor(private http: HttpClient) {
    }


    ngOnInit() {
      this.create();
    }

    /**
     * 新增
     */
    private create(): void {
      const url = this.url + 'new';
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


export { EmpAddComponent };
