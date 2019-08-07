import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneChartComponent } from './phone-chart.component';

describe('PhoneChartComponent', () => {
  let component: PhoneChartComponent;
  let fixture: ComponentFixture<PhoneChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
