import { TestBed } from '@angular/core/testing';

import { BloodRequestService } from './blood-request.service';

describe('BloodRequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BloodRequestService = TestBed.get(BloodRequestService);
    expect(service).toBeTruthy();
  });
});
