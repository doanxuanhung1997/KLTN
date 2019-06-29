import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBillComponent } from './show-bill.component';

describe('ShowBillComponent', () => {
  let component: ShowBillComponent;
  let fixture: ComponentFixture<ShowBillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowBillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
