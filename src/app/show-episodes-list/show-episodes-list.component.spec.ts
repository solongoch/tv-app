import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowEpisodesListComponent } from './show-episodes-list.component';

describe('ShowEpisodesListComponent', () => {
  let component: ShowEpisodesListComponent;
  let fixture: ComponentFixture<ShowEpisodesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowEpisodesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowEpisodesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
