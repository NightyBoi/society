import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DermatologyComponent } from './dermatology.component';

describe('DermatologyComponent', () => {
  let component: DermatologyComponent;
  let fixture: ComponentFixture<DermatologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DermatologyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DermatologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
