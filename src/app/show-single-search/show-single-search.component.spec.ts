import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSingleSearchComponent } from './show-single-search.component';

describe('ShowSingleSearchComponent', () => {
  let component: ShowSingleSearchComponent;
  let fixture: ComponentFixture<ShowSingleSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowSingleSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSingleSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
