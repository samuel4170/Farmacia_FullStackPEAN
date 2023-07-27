import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraDetailsComponent } from './venta1-details.component';

describe('CompraDetailsComponent', () => {
  let component: CompraDetailsComponent;
  let fixture: ComponentFixture<CompraDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompraDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompraDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
