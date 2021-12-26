import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsCatalogComponent } from './products-catalog.component';

describe('ProductsMenuComponent', () => {
  let component: ProductsCatalogComponent;
  let fixture: ComponentFixture<ProductsCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsCatalogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
