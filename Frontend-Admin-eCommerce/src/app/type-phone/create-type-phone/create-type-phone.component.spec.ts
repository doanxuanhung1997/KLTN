import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTypePhoneComponent } from './create-type-phone.component';

describe('CreateTypePhoneComponent', () => {
  let component: CreateTypePhoneComponent;
  let fixture: ComponentFixture<CreateTypePhoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTypePhoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTypePhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
