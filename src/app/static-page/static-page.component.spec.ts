import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StaticPageComponent } from './static-page.component';
import { RouterModule } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('StaticPageComponent', () => {
  let component: StaticPageComponent;
  let fixture: ComponentFixture<StaticPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StaticPageComponent],
      imports: [RouterModule.forRoot([]), HttpClientTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
