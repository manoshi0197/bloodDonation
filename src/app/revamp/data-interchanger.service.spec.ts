import { TestBed } from '@angular/core/testing';

import { DataInterchangerService } from './data-interchanger.service';

describe('DataInterchangerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataInterchangerService = TestBed.get(DataInterchangerService);
    expect(service).toBeTruthy();
  });
});
