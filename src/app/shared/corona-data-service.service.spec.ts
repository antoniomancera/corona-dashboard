import { TestBed } from '@angular/core/testing';

import { CoronaDataServiceService } from './corona-data-service.service';

describe('CoronaDataServiceService', () => {
  let service: CoronaDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoronaDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
