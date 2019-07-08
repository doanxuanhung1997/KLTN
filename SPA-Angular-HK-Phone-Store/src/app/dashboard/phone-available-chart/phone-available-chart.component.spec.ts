import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneAvailableChartComponent } from './phone-available-chart.component';

describe('PhoneAvailableChartComponent', () => {
  let component: PhoneAvailableChartComponent;
  let fixture: ComponentFixture<PhoneAvailableChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneAvailableChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneAvailableChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
