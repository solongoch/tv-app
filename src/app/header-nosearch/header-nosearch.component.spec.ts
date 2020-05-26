import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderNosearchComponent } from './header-nosearch.component';

describe('HeaderNosearchComponent', () => {
  let component: HeaderNosearchComponent;
  let fixture: ComponentFixture<HeaderNosearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderNosearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderNosearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
