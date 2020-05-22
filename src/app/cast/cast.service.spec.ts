import { TestBed } from '@angular/core/testing';

import { CastService } from './cast.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CastService', () => {
  let service: CastService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(CastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
