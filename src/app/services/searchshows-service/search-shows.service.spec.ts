import { TestBed } from '@angular/core/testing';
import { SearchShowsService } from './search-shows.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';

describe('SearchShowsService', () => {
  let service: SearchShowsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports :[
        HttpClientTestingModule,
        RouterModule.forRoot([])
      ]});
    service = TestBed.inject(SearchShowsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
