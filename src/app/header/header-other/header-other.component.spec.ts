import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderOtherComponent } from './header-other.component';

describe('HeaderOtherComponent', () => {
  let component: HeaderOtherComponent;
  let fixture: ComponentFixture<HeaderOtherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderOtherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
