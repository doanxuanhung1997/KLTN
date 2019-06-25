import { TestBed, inject } from '@angular/core/testing';

import { TypePhoneService } from './type-phone.service';

describe('TypePhoneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TypePhoneService]
    });
  });

  it('should be created', inject([TypePhoneService], (service: TypePhoneService) => {
    expect(service).toBeTruthy();
  }));
});
