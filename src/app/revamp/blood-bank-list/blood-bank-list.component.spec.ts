import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodBankListComponent } from './blood-bank-list.component';

describe('BloodBankListComponent', () => {
  let component: BloodBankListComponent;
  let fixture: ComponentFixture<BloodBankListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BloodBankListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodBankListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
