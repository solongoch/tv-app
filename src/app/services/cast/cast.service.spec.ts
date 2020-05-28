import { TestBed } from '@angular/core/testing';
import { CastService } from './cast.service';
import { RouterModule } from '@angular/router';

describe('CastService', () => {
  let service: CastService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        RouterModule.forRoot([])
      ]
    });
    service = TestBed.inject(CastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
