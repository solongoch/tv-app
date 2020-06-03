import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ShowInfoComponent } from './show-info.component';
import { TvshowService } from 'src/app/services/show-info-service/tvshow.service';
import { TvshowServiceFake } from 'src/app/services/show-info-service/tvshow.service.fake';
import { RouterModule } from '@angular/router';

describe('ShowInfoComponent', () => {
  let component: ShowInfoComponent;
  let fixture: ComponentFixture<ShowInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShowInfoComponent],
      imports: [RouterModule.forRoot([])],
      providers: [{ provide: TvshowService, useClass: TvshowServiceFake }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
