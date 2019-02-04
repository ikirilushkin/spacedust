import { TestBed } from '@angular/core/testing';

import { ExoplanetService } from './exoplanet.service';

describe('ExoplanetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExoplanetService = TestBed.get(ExoplanetService);
    expect(service).toBeTruthy();
  });
});
