import { TestBed } from '@angular/core/testing';
import { CastService } from './cast.service';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'

describe('CastService', () => {
  let service: CastService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientModule,
        RouterModule.forRoot([])
      ]
    });
    service = TestBed.inject(CastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
