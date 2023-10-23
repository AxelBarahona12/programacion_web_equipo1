import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoopcartComponent } from './shoopcart.component';

describe('ShoopcartComponent', () => {
  let component: ShoopcartComponent;
  let fixture: ComponentFixture<ShoopcartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShoopcartComponent]
    });
    fixture = TestBed.createComponent(ShoopcartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
