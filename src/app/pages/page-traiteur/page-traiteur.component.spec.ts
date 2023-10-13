import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTraiteurComponent } from './page-traiteur.component';

describe('PageTraiteurComponent', () => {
  let component: PageTraiteurComponent;
  let fixture: ComponentFixture<PageTraiteurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageTraiteurComponent]
    });
    fixture = TestBed.createComponent(PageTraiteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
