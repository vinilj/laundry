import { TestBed } from '@angular/core/testing';

import { RoleGaurdService } from './role-gaurd.service';

describe('RoleGaurdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RoleGaurdService = TestBed.get(RoleGaurdService);
    expect(service).toBeTruthy();
  });
});
