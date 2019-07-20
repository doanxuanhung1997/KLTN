import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSaleProductsComponent } from './page-sale-products.component';

describe('PageSaleProductsComponent', () => {
  let component: PageSaleProductsComponent;
  let fixture: ComponentFixture<PageSaleProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSaleProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSaleProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
