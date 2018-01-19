import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { EffectsModule } from '@ngrx/effects';

import { Logger, AppModuleLogger } from './shared/services/logger';
import { AppComponent } from './app.component';
import { rootRoutes } from './app.routes';

//DirectiveModule
import { ComponentDemoModule } from './demos/component/component-demo.module';


//DirectiveModule
import { DirectiveDemoModule } from './demos/directive/directive-demo.module';

//DirectiveModule
import { DiDemoModule } from './demos/di/di-demo.module';

//RouterModule
import { RouterDemoModule } from './demos/router/router-demo.module';


// FormDemoModule
import { FormDemoModule } from './demos/form/form-demo.module';

// HttpDemoModule
import { HttpDemoModule } from './demos/http/http-demo.module';

// MiscDemoModule
import { MiscDemoModule } from './demos/misc/misc-demo.module';

// RxjsDemoModule
import { RxjsDemoModule } from './demos/rxjs/rxjs-demo.module';

// SimpleDemoModule
import { SimpleDemoModule } from './demos/simple/simple-demo.module';



@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(rootRoutes),

        DiDemoModule,
        RouterDemoModule,
        ComponentDemoModule,
        DirectiveDemoModule,

        FormDemoModule,
        HttpDemoModule,
        MiscDemoModule,
        SimpleDemoModule,
        RxjsDemoModule,
      ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        //{ provide: 'Logger', useClass: AppModuleLogger }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
  constructor(@Inject('Logger')logger: Logger) {
    logger.write('AppModule');
  }
}
