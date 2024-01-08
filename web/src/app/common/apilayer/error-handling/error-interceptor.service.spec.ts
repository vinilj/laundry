import { TestBed } from '@angular/core/testing';

import { ErrorinterceptorService } from './error-interceptor.service';

describe('ErrorInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ErrorinterceptorService = TestBed.get(ErrorinterceptorService);
    expect(service).toBeTruthy();
  });
});
