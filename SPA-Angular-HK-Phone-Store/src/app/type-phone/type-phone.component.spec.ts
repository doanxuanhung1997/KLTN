import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypePhoneComponent } from './type-phone.component';

describe('TypePhoneComponent', () => {
  let component: TypePhoneComponent;
  let fixture: ComponentFixture<TypePhoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypePhoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypePhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
