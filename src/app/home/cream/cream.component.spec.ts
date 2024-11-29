import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreamComponent } from './cream.component';

describe('CreamComponent', () => {
  let component: CreamComponent;
  let fixture: ComponentFixture<CreamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
