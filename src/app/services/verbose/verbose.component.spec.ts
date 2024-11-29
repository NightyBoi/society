import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerboseComponent } from './verbose.component';

describe('VerboseComponent', () => {
  let component: VerboseComponent;
  let fixture: ComponentFixture<VerboseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerboseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerboseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
