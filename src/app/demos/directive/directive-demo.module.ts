// 导入模块
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

// 组件
import { DirectiveDemoComponent } from './directive-demo.component';

import { HighlightDirective }     from './custom/highlight/highlight.directive';
import { HighlightDemoComponent } from './custom/highlight/highlight-demo.component';

import { UnlessDirective }     from './custom/unless/unless.directive';
import { UnlessDemoComponent } from './custom/unless/unless-demo.component';
import { UnlessDemoItemComponent } from './custom/unless/unless-demo-item.component';
import { Logger, FeatureModuleLogger, DirectiveLogger } from '../../shared/services/logger';

/**
 * DirectiveDemoModule
 */
@NgModule({
    declarations: [
      DirectiveDemoComponent,

      HighlightDirective,
      HighlightDemoComponent,

      UnlessDirective,
      UnlessDemoComponent,
      UnlessDemoItemComponent
    ],
    imports: [
        RouterModule,
        HttpClientModule
    ],
    exports: [
      DirectiveDemoComponent,
      HighlightDirective,
      HighlightDemoComponent,

      UnlessDirective,
      UnlessDemoComponent,
      UnlessDemoItemComponent

    ],
    providers: [
      {provide: 'Logger', useClass: DirectiveLogger}
    ]
})
class DirectiveDemoModule {
}

export { DirectiveDemoModule };
