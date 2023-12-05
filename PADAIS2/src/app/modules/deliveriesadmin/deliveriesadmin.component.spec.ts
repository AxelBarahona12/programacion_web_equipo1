import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveriesadminComponent } from './deliveriesadmin.component';

describe('DeliveriesadminComponent', () => {
  let component: DeliveriesadminComponent;
  let fixture: ComponentFixture<DeliveriesadminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeliveriesadminComponent]
    });
    fixture = TestBed.createComponent(DeliveriesadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
