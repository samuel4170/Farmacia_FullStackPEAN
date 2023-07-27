import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentsListComponent } from './vents-list.component';

describe('VentsListComponent', () => {
  let component: VentsListComponent;
  let fixture: ComponentFixture<VentsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
