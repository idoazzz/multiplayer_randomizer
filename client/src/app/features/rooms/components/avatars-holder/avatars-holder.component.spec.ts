import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarsHolderComponent } from './avatars-holder.component';

describe('AvatarsHolderComponent', () => {
  let component: AvatarsHolderComponent;
  let fixture: ComponentFixture<AvatarsHolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvatarsHolderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarsHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
