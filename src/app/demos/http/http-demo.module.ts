// 导入模块
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

// 组件
import { HttpDemoComponent } from './http-demo.component';
import { HttpGetDemoComponent } from './get/http-get-demo.component';
import { HttpPostDemoComponent } from './post/http-post-demo.component';

/**
 * HttpDemoModule
 */
@NgModule({
    declarations: [
        HttpDemoComponent,
        HttpGetDemoComponent,
        HttpPostDemoComponent
    ],
    imports: [
        RouterModule,
        HttpClientModule
    ],
    exports: [
        HttpDemoComponent,
        HttpGetDemoComponent,
        HttpPostDemoComponent
    ]
})
class HttpDemoModule {
}

export { HttpDemoModule };
