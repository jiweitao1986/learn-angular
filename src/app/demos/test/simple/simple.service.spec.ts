import { TestBed, inject } from '@angular/core/testing';;
import { SimpleService } from './simple.service';

describe('SimpleService Suite', () => {

  beforeEach(()=> {

    TestBed.configureTestingModule({
      providers: [
        SimpleService
      ]
    });

  });


  it('属性url的值是localhost',inject([SimpleService], (service: SimpleService)=> {
      expect(service.url).toBe('localhost');
  }));


});