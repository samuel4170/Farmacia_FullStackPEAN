import { ComponentFixture, TestBed } from '@angular/core/testing';

import { quienesComponent } from './add-quienes.component';

describe('quienesComponent', () => {
  let component: quienesComponent;
  let fixture: ComponentFixture<quienesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ quienesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(quienesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
