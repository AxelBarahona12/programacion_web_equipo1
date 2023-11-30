import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOpinionComponent } from './list-opinion.component';

describe('ListOpinionComponent', () => {
  let component: ListOpinionComponent;
  let fixture: ComponentFixture<ListOpinionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListOpinionComponent]
    });
    fixture = TestBed.createComponent(ListOpinionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
