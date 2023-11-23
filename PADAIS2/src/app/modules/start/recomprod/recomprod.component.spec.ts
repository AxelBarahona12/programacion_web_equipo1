import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecomprodComponent } from './recomprod.component';

describe('RecomprodComponent', () => {
  let component: RecomprodComponent;
  let fixture: ComponentFixture<RecomprodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecomprodComponent]
    });
    fixture = TestBed.createComponent(RecomprodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
