import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CastInfoComponent } from './cast-info.component';
import { CastService } from '../services/cast/cast.service';
import { CastServiceFake } from '../services/cast/cast.service.fake';

describe('CastInfoComponent', () => {
  let component: CastInfoComponent;
  let fixture: ComponentFixture<CastInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CastInfoComponent ],
      providers: [
        {provide: CastService, useClass: CastServiceFake}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CastInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
