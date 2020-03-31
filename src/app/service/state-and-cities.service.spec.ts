import { TestBed } from '@angular/core/testing';

import { StateAndCitiesService } from './state-and-cities.service';

describe('StateAndCitiesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StateAndCitiesService = TestBed.get(StateAndCitiesService);
    expect(service).toBeTruthy();
  });
});
