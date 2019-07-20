import { TestBed } from '@angular/core/testing';

import { AddBillService } from './add-bill.service';

describe('AddBillService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddBillService = TestBed.get(AddBillService);
    expect(service).toBeTruthy();
  });
});
