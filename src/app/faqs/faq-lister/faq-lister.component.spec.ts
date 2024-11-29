import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqListerComponent } from './faq-lister.component';

describe('FaqListerComponent', () => {
  let component: FaqListerComponent;
  let fixture: ComponentFixture<FaqListerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaqListerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaqListerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
