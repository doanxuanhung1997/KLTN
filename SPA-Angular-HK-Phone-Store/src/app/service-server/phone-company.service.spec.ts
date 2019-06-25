import { TestBed, inject } from '@angular/core/testing';

import { PhoneCompanyService } from './phone-company.service';

describe('PhoneCompanyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhoneCompanyService]
    });
  });

  it('should be created', inject([PhoneCompanyService], (service: PhoneCompanyService) => {
    expect(service).toBeTruthy();
  }));
});
