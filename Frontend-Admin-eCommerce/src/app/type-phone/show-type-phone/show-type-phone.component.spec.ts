import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTypePhoneComponent } from './show-type-phone.component';

describe('ShowTypePhoneComponent', () => {
  let component: ShowTypePhoneComponent;
  let fixture: ComponentFixture<ShowTypePhoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowTypePhoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowTypePhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
