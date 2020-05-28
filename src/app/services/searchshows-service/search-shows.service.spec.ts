import { TestBed } from '@angular/core/testing';
import { SearchShowsService } from './search-shows.service';
import { HttpClientModule } from '@angular/common/http'

describe('SearchShowsService', () => {
  let service: SearchShowsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(SearchShowsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
