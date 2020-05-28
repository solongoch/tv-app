import { TestBed } from '@angular/core/testing';

import { EpisodeServiceService } from './episode-service.service';
import { HttpClientModule } from '@angular/common/http'
import { from } from 'rxjs';

describe('EpisodeServiceService', () => {
  let service: EpisodeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientModule
      ]
    });
    service = TestBed.inject(EpisodeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
