import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinnerSignComponent } from './winner-sign.component';

describe('WinnerSignComponent', () => {
  let component: WinnerSignComponent;
  let fixture: ComponentFixture<WinnerSignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WinnerSignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WinnerSignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
