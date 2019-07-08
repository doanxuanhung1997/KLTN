import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneSoldChartComponent } from './phone-sold-chart.component';

describe('PhoneSoldChartComponent', () => {
  let component: PhoneSoldChartComponent;
  let fixture: ComponentFixture<PhoneSoldChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneSoldChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneSoldChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
