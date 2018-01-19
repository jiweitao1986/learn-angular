import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImmutableDemoComponent } from './immutable-demo.component';

describe('ImmutableDemoComponent', () => {
  let component: ImmutableDemoComponent;
  let fixture: ComponentFixture<ImmutableDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImmutableDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImmutableDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
