import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutLanderComponent } from './about-lander.component';

describe('AboutLanderComponent', () => {
  let component: AboutLanderComponent;
  let fixture: ComponentFixture<AboutLanderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutLanderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutLanderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
