import { Injectable } from '@angular/core';

@Injectable()
class SimpleService {
  
  public url = 'localhost';

  constructor() {

  }

  public getList() {
    return [
      { code: 'ZhangSan', name: '张三' },
      { code: 'LiSi',     name: '李四' }
    ];
  }
  
  public getInfo() {
    return { code: 'ZhangSan', name: '张三' };
  }

  public getListByHttp() {
    return 
  }
}

export { SimpleService };
