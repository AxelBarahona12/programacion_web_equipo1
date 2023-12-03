import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmUpdateUsersComponent } from './adm-update-users.component';

describe('AdmUpdateUsersComponent', () => {
  let component: AdmUpdateUsersComponent;
  let fixture: ComponentFixture<AdmUpdateUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdmUpdateUsersComponent]
    });
    fixture = TestBed.createComponent(AdmUpdateUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
