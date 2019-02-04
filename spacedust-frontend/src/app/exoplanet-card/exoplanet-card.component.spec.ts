import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoplanetCardComponent } from './exoplanet-card.component';

describe('ExoplanetCardComponent', () => {
  let component: ExoplanetCardComponent;
  let fixture: ComponentFixture<ExoplanetCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExoplanetCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExoplanetCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
