import { TestBed } from '@angular/core/testing';

import { MyRequestService } from './my-request.service';

describe('MyRequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyRequestService = TestBed.get(MyRequestService);
    expect(service).toBeTruthy();
  });
});
