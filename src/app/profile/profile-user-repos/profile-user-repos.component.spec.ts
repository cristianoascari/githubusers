import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileUserReposComponent } from './profile-user-repos.component';

describe('ProfileUserReposComponent', () => {
  let component: ProfileUserReposComponent;
  let fixture: ComponentFixture<ProfileUserReposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileUserReposComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileUserReposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
