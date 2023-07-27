import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveedsListComponent } from './proveeds-list.component';

describe('ProveedsListComponent', () => {
  let component: ProveedsListComponent;
  let fixture: ComponentFixture<ProveedsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProveedsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProveedsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
