import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageConditionComponent } from './page-condition.component';

describe('PageConditionComponent', () => {
  let component: PageConditionComponent;
  let fixture: ComponentFixture<PageConditionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageConditionComponent]
    });
    fixture = TestBed.createComponent(PageConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
