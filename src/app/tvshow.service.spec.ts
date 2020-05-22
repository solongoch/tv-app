import { TestBed } from '@angular/core/testing';

import { TvshowService } from './tvshow.service';
import { HttpClientModule } from '@angular/common/http'

describe('TvshowService', () => {
  let service: TvshowService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientModule
      ]
    });
    service = TestBed.inject(TvshowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
