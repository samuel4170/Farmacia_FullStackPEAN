import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Producto1DetailsComponent } from './producto1-details.component';


describe('Producto1DetailsComponent', () => {
  let component: Producto1DetailsComponent;
  let fixture: ComponentFixture<Producto1DetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Producto1DetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Producto1DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { AddVentaComponent } from 'src/app/components/add-venta/add-venta.component';

describe('AddVentaComponent', () => {
  let component: AddVentaComponent;
  let fixture: ComponentFixture<AddVentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddVentaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
