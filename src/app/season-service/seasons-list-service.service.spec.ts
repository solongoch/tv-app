import { TestBed } from '@angular/core/testing';

import { SeasonsListServiceService } from './seasons-list-service.service';

describe('SeasonsListServiceService', () => {
  let service: SeasonsListServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeasonsListServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
