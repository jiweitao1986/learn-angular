import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { EffectsModule } from '@ngrx/effects';

import { Logger, AppModuleLogger } from './shared/services/logger';
import { AppComponent } from './app.component';


//AppRoutingModule
import { AppRoutingModule } from './app-routing.module';

// Feature Modules
import { ComponentDemoModule } from './demos/component/component-demo.module';
import { DirectiveDemoModule } from './demos/directive/directive-demo.module';
import { DiDemoModule } from './demos/di/di-demo.module';
import { RouterDemoModule } from './demos/router/router-demo.module';
import { FormDemoModule } from './demos/form/form-demo.module';
import { HttpDemoModule } from './demos/http/http-demo.module';
import { MiscDemoModule } from './demos/misc/misc-demo.module';
import { RxjsDemoModule } from './demos/rxjs/rxjs-demo.module';
import { SimpleDemoModule } from './demos/simple/simple-demo.module';



@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,

        DiDemoModule,
        ComponentDemoModule,
        DirectiveDemoModule,
        FormDemoModule,
        HttpDemoModule,
        MiscDemoModule,
        RxjsDemoModule,
        SimpleDemoModule,
        RouterDemoModule,

        AppRoutingModule
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
