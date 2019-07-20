import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNewProductsComponent } from './page-new-products.component';

describe('PageNewProductsComponent', () => {
  let component: PageNewProductsComponent;
  let fixture: ComponentFixture<PageNewProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNewProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNewProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
