import { TestBed } from '@angular/core/testing';

import { DonationCampService } from './donation-camp.service';

describe('DonationCampService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DonationCampService = TestBed.get(DonationCampService);
    expect(service).toBeTruthy();
  });
});
