import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Products1ListComponent } from './products1-list.component';

describe('Products1ListComponent', () => {
  let component: Products1ListComponent;
  let fixture: ComponentFixture<Products1ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Products1ListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Products1ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
