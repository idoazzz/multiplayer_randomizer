import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartupMenuComponent } from './startup-menu.component';

describe('StartupMenuComponent', () => {
  let component: StartupMenuComponent;
  let fixture: ComponentFixture<StartupMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartupMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartupMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
