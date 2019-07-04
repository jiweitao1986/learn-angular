import { TestBed } from '@angular/core/testing';
import { SimpleComponent } from './simple.component';


describe('SimpleCcomponentSuite: ', () => {

  let fixture;

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [ SimpleComponent ]
    });
    fixture = TestBed.createComponent(SimpleComponent);
    this.hello = 'HELLOOOOOOO';

  });

  it('组件创建成功', () => {
    this.title = 'World .....';
    console.log(this.title);
    const simpleCmp = fixture.debugElement.componentInstance;
    expect(simpleCmp).toBeTruthy();
  });

  it('组件属性title的值是simple', () => {
    const simpleCmp = fixture.debugElement.componentInstance;
    expect(simpleCmp.title).toEqual('simple');
  });

  it('界面上h1中的文本是simple', () => {
    fixture.detectChanges();
    const compiledElem = fixture.debugElement.nativeElement;
    const h1Elem = compiledElem.querySelector('h1');
    expect(h1Elem.textContent).toEqual('simple');
    console.log(this.hello);
  });

});
