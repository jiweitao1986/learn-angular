interface Logger {
  write(content: string): void;
}











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
  }
}

/**
 * 模块logger
 */
class FeatureModuleLogger implements Logger {
  write(content: string): void {
    console.log('---------- FeatureModule ----------');
    console.log( content);
  }
}

class SubFeatureModuleLogger implements Logger {
  write(content: string): void {
    console.log('---------- SubFeatureModuleLogger ----------');
    console.log( content);
  }
}











// ----------------------------------------
// 组件日志
// ----------------------------------------

/**
 * 根组件Logger
 */
class AppComponentLogger implements Logger {
  write(content: string): void{
    console.log('---------- AppComponentLogger ----------');
    console.log(content);
  }
}

/**
 * 组件Logger
 */
class ComponentLogger implements Logger {
  write(content: string): void{
    console.log('---------- Component ----------');
    console.log(content);
  }
}

/**
 * 子组件的Logger
 */
class SubComponentLogger implements Logger {
  write(content: string): void{
    console.log('---------- SubComponent ----------');
    console.log(content);
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
  }
}










export {
  Logger,
  AppModuleLogger,    FeatureModuleLogger, SubFeatureModuleLogger,
  AppComponentLogger, ComponentLogger,     SubComponentLogger,
  DirectiveLogger
};