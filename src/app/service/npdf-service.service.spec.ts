import { TestBed } from '@angular/core/testing';

import { NpdfServiceService } from './npdf-service.service';

describe('NpdfServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NpdfServiceService = TestBed.get(NpdfServiceService);
    expect(service).toBeTruthy();
  });
});
