import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowitworkstwoComponent } from './howitworkstwo.component';

describe('HowitworkstwoComponent', () => {
  let component: HowitworkstwoComponent;
  let fixture: ComponentFixture<HowitworkstwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowitworkstwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HowitworkstwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
