import { TestBed } from '@angular/core/testing';

import { UpdateviewService } from './updateview.service';

describe('UpdateviewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdateviewService = TestBed.get(UpdateviewService);
    expect(service).toBeTruthy();
  });
});
