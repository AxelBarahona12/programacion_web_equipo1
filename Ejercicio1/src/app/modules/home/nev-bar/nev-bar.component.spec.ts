import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NevBarComponent } from './nev-bar.component';

describe('NevBarComponent', () => {
  let component: NevBarComponent;
  let fixture: ComponentFixture<NevBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NevBarComponent]
    });
    fixture = TestBed.createComponent(NevBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
