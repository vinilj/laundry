import { TestBed } from '@angular/core/testing';

import { LocalStroageService } from './local-stroage.service';

describe('LocalStroageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LocalStroageService = TestBed.get(LocalStroageService);
    expect(service).toBeTruthy();
  });
});
