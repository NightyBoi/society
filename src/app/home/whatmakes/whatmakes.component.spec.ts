import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatmakesComponent } from './whatmakes.component';

describe('WhatmakesComponent', () => {
  let component: WhatmakesComponent;
  let fixture: ComponentFixture<WhatmakesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatmakesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatmakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
