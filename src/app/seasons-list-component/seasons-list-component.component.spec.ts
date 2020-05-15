import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonsListComponentComponent } from './seasons-list-component.component';

describe('SeasonsListComponentComponent', () => {
  let component: SeasonsListComponentComponent;
  let fixture: ComponentFixture<SeasonsListComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeasonsListComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonsListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
