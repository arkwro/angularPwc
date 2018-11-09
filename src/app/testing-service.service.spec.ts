import { TestBed } from '@angular/core/testing';

import { TestingServiceService } from './testing-service.service';

describe('TestingServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestingServiceService = TestBed.get(TestingServiceService);
    expect(service).toBeTruthy();
  });
});
