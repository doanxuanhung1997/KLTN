import { TestBed } from '@angular/core/testing';

import { PhoneCompanyService } from './phone-company.service';

describe('PhoneCompanyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PhoneCompanyService = TestBed.get(PhoneCompanyService);
    expect(service).toBeTruthy();
  });
});
