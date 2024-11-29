import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealUsersComponent } from './real-users.component';

describe('RealUsersComponent', () => {
  let component: RealUsersComponent;
  let fixture: ComponentFixture<RealUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RealUsersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
