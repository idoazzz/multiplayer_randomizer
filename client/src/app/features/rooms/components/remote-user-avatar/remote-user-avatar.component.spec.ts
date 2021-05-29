import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoteUserAvatarComponent } from './remote-user-avatar.component';

describe('RemoteUserAvatarComponent', () => {
  let component: RemoteUserAvatarComponent;
  let fixture: ComponentFixture<RemoteUserAvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoteUserAvatarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoteUserAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
