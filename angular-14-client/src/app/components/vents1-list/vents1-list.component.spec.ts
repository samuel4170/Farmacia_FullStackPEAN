import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprsListComponent } from './vents1-list.component';

describe('ComprsListComponent', () => {
  let component: ComprsListComponent;
  let fixture: ComponentFixture<ComprsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComprsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComprsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
