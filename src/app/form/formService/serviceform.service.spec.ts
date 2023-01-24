import { TestBed } from '@angular/core/testing';

import { ServiceformService } from './serviceform.service';

describe('ServiceformService', () => {
  let service: ServiceformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
