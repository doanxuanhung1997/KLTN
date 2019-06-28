import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTypePhoneComponent } from './edit-type-phone.component';

describe('EditTypePhoneComponent', () => {
  let component: EditTypePhoneComponent;
  let fixture: ComponentFixture<EditTypePhoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTypePhoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTypePhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
