import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ShowEpisodesListComponent } from './show-episodes-list.component';
import { RouterModule } from '@angular/router';
import { EpisodeServiceService } from '../services/episode-info-service/episode-service.service';
import { EpisodeServiceFake } from '../services/episode-info-service/episode-service-fake';

describe('ShowEpisodesListComponent', () => {
  let component: ShowEpisodesListComponent;
  let fixture: ComponentFixture<ShowEpisodesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowEpisodesListComponent ],
      imports: [
        RouterModule.forRoot([])
      ],
      providers: [
        { provide: EpisodeServiceService, useClass: EpisodeServiceFake }
      ]
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
