import { ComponentFixture, TestBed } from '@angular/core/testing';

import { segurosComponent } from './add-quienes.component';

describe('segurosComponent', () => {
  let component: segurosComponent;
  let fixture: ComponentFixture<segurosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ segurosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(segurosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
