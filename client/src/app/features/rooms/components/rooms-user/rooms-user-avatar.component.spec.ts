import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsUserComponent } from './rooms-user-avatar.component';

describe('RoomsUserComponent', () => {
  let component: RoomsUserComponent;
  let fixture: ComponentFixture<RoomsUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomsUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
