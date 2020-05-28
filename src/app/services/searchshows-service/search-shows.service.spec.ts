import { TestBed } from '@angular/core/testing';

import { SearchShowsService } from './search-shows.service';

describe('SearchShowsService', () => {
  let service: SearchShowsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchShowsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
