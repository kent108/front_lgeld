import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonPageHomeComponent } from './button-page-home.component';

describe('ButtonPageHomeComponent', () => {
  let component: ButtonPageHomeComponent;
  let fixture: ComponentFixture<ButtonPageHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonPageHomeComponent]
    });
    fixture = TestBed.createComponent(ButtonPageHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
