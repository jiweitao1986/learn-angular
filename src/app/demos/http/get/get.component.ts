import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
    selector: 'app-get',
    templateUrl: './get.component.html'
})

class GetComponent {

    /**
     * url
     */
    private url = 'http://localhost:8080/emps';

    /**
     * 请求结果
     */
    private data: any;

    /**
     * 构造函数
     * @param http
     */
    constructor(private http: HttpClient) {
    }

    /**
     * 获取员工集合
     */
    private getEmps() {
      this.http.get(this.url).subscribe(data => {
          this.data = data;
      });
    }
}


export { GetComponent };
