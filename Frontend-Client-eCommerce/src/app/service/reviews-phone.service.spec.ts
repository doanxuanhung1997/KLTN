import { TestBed } from '@angular/core/testing';

import { ReviewsPhoneService } from './reviews-phone.service';

describe('ReviewsPhoneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReviewsPhoneService = TestBed.get(ReviewsPhoneService);
    expect(service).toBeTruthy();
  });
});
