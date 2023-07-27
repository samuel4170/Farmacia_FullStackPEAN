import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveedorDetailsComponent } from './proveedor-details.component';

describe('ProveedorDetailsComponent', () => {
  let component: ProveedorDetailsComponent;
  let fixture: ComponentFixture<ProveedorDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProveedorDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProveedorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
