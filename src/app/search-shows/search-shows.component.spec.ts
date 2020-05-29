import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchShowsComponent } from './search-shows.component';
import { RouterModule } from '@angular/router';
import { SearchShowsService } from '../services/searchshows-service/search-shows.service';
import { SearchShowsServiceFake } from '../services/searchshows-service/search-shows-service-fake';

describe('SearchShowsComponent', () => {
  let component: SearchShowsComponent;
  let fixture: ComponentFixture<SearchShowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchShowsComponent ],
      imports: [
        RouterModule.forRoot([])
      ],
      providers: [
        { provide: SearchShowsService, useClass: SearchShowsServiceFake }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
