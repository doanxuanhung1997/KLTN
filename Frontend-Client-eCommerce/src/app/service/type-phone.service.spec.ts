import { TestBed } from '@angular/core/testing';

import { TypePhoneService } from './type-phone.service';

describe('TypePhoneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TypePhoneService = TestBed.get(TypePhoneService);
    expect(service).toBeTruthy();
  });
});
