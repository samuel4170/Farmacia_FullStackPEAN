import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoDetailsComponent } from './producto-details.component';

describe('ProductoDetailsComponent', () => {
  let component: ProductoDetailsComponent;
  let fixture: ComponentFixture<ProductoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
