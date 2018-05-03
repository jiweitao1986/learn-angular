import { InjectionToken } from '@angular/core';


// ----------------------------------------
// 接口定义
// ----------------------------------------

interface Logger {
  write(content: string): void;
}

const LOGGER_TOKEN = new InjectionToken<Logger>('LOGGER_TOKEN');


// ----------------------------------------
// 模块日志
// ----------------------------------------

/**
 * 根模块logger
 */
class AppModuleLogger implements Logger {
  write(content: string): void {
    console.log('---------- AppModuleLogger ----------');
    console.log( content);
    console.log('\n\n');
  }
}

/**
 * 模块logger
 */
class FeatureModuleLogger implements Logger {
  write(content: string): void {
    console.log('---------- FeatureModule ----------');
    console.log( content);
    console.log('\n\n');

  }
}

class SimpleSubFeatureModuleLogger implements Logger {
  write(content: string): void {
    console.log('---------- SimpleSubFeatureModuleLogger ----------');
    console.log( content);
    console.log('\n\n');

  }
}

class FirstSubFeatureModuleLogger implements Logger {
  write(content: string): void {
    console.log('---------- FirstSubFeatureModuleLogger ----------');
    console.log( content);
    console.log('\n\n');
  }
}

class SecondSubFeatureModuleLogger implements Logger {
  write(content: string): void {
    console.log('---------- SecondSubFeatureModuleLogger ----------');
    console.log( content);
    console.log('\n\n');
  }
}


// ----------------------------------------
// 组件日志
// ----------------------------------------

/**
 * AppComponent组件Logger
 */
class AppComponentLogger implements Logger {
  write(content: string): void {
    console.log('---------- AppComponentLogger ----------');
    console.log(content);
    console.log('\n\n');
  }
}

/**
 * Di组件Logger
 */
class DiComponentLogger implements Logger {
  write(content: string): void {
    console.log('---------- Di Component ----------');
    console.log(content);
    console.log('\n\n');
  }
}

/**
 * 组件1Logger
 */
class DiFirstSubComponentLogger implements Logger {
  write(content: string): void {
    console.log('---------- Di First SubComponent ----------');
    console.log(content);
    console.log('\n\n');
  }
}

/**
 * 组件2Logger
 */
class DiSecondSubComponentLogger implements Logger {
  write(content: string): void {
    console.log('---------- Di Second SubComponent ----------');
    console.log(content);
    console.log('\n\n');
  }
}


// ----------------------------------------
// 指令Logger
// ----------------------------------------

/**
 * 指令日志
 */
class DirectiveLogger implements Logger {
  write(content: string): void {
    console.log('---------- Directive ----------');
    console.log(content);
    console.log('\n\n');
  }
}


export {
  Logger, LOGGER_TOKEN,
  AppModuleLogger, FeatureModuleLogger, SimpleSubFeatureModuleLogger,
  FirstSubFeatureModuleLogger, SecondSubFeatureModuleLogger,
  AppComponentLogger, DiComponentLogger,
  DiFirstSubComponentLogger, DiSecondSubComponentLogger, DirectiveLogger
};
