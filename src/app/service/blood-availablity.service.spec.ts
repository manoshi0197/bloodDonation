import { TestBed } from '@angular/core/testing';

import { BloodAvailablityService } from './blood-availablity.service';

describe('BloodAvailablityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BloodAvailablityService = TestBed.get(BloodAvailablityService);
    expect(service).toBeTruthy();
  });
});
