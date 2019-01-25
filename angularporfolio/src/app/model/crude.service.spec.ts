import { TestBed, inject } from '@angular/core/testing';

import { CrudeService } from './crude.service';

describe('CrudeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrudeService]
    });
  });

  it('should be created', inject([CrudeService], (service: CrudeService) => {
    expect(service).toBeTruthy();
  }));
});