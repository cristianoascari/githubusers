import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileUserDataComponent } from './profile-user-data.component';

describe('ProfileUserDataComponent', () => {
  let component: ProfileUserDataComponent;
  let fixture: ComponentFixture<ProfileUserDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileUserDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileUserDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
