import { TestBed } from '@angular/core/testing';

import { EpisodeServiceService } from './episode-service.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';

describe('EpisodeServiceService', () => {
  let service: EpisodeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule,
        RouterModule.forRoot([])
      ]
    });
    service = TestBed.inject(EpisodeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
