import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartupButtonComponent } from './startup-button.component';

describe('StartupButtonComponent', () => {
  let component: StartupButtonComponent;
  let fixture: ComponentFixture<StartupButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartupButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartupButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
