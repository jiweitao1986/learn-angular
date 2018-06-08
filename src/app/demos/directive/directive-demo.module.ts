import { NgModule } from '@angular/core';
import { Logger, FeatureModuleLogger, DirectiveLogger } from '../../shared/services/logger';

import { DirectiveDemoRoutingModule } from './directive-demo-routing.module';
import { DirectiveDemoComponent } from './directive-demo.component';

import { HighlightDirective } from './custom/highlight/highlight.directive';
import { HighlightDemoComponent } from './custom/highlight/highlight-demo.component';
import { UnlessDirective } from './custom/unless/unless.directive';
import { UnlessDemoComponent } from './custom/unless/unless-demo.component';
import { UnlessDemoItemComponent } from './custom/unless/unless-demo-item.component';


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
        DirectiveDemoRoutingModule
    ],
    exports: [
      DirectiveDemoComponent,
      HighlightDirective,
      UnlessDirective,
    ],
    providers: [
    ]
})
class DirectiveDemoModule {
}

export { DirectiveDemoModule };
