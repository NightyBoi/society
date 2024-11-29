import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkinInCheckComponent } from './skin-in-check.component';

describe('SkinInCheckComponent', () => {
  let component: SkinInCheckComponent;
  let fixture: ComponentFixture<SkinInCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkinInCheckComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkinInCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
