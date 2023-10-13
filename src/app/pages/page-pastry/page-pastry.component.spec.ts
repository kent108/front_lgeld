import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePastryComponent } from './page-pastry.component';

describe('PagePastryComponent', () => {
  let component: PagePastryComponent;
  let fixture: ComponentFixture<PagePastryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagePastryComponent]
    });
    fixture = TestBed.createComponent(PagePastryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
