import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalUserAvatarComponent } from './local-user-avatar.component';

describe('LocalUserAvatarComponent', () => {
  let component: LocalUserAvatarComponent;
  let fixture: ComponentFixture<LocalUserAvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalUserAvatarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalUserAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
