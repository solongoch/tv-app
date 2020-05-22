import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvsearchComponent } from './tvsearch.component';

describe('TvsearchComponent', () => {
  let component: TvsearchComponent;
  let fixture: ComponentFixture<TvsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
