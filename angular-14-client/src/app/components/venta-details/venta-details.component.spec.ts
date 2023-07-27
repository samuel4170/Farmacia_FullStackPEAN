import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaDetailsComponent } from './venta-details.component';

describe('VentaDetailsComponent', () => {
  let component: VentaDetailsComponent;
  let fixture: ComponentFixture<VentaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentaDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
