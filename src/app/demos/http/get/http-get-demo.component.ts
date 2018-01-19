import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
    selector: 'http-get-demo',
    templateUrl: './http-get-demo.component.html'
})

class HttpGetDemoComponent {

    /**
     * url
     */
    url = 'http://localhost:3000/json/';

    /**
     * 请求结果
     */
    result: string;

    /**
     * 构造函数
     * @param http
     */
    constructor(private http: HttpClient) {
    }

    /**
     * 获取员工集合
     */
    getEmps() {
        this.http.get(this.url + 'emp.json').subscribe(data => {
            this.result = JSON.stringify(data);
        });
    }
}


export { HttpGetDemoComponent };
