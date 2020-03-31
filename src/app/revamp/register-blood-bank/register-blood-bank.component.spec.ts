import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterBloodBankComponent } from './register-blood-bank.component';

describe('RegisterBloodBankComponent', () => {
  let component: RegisterBloodBankComponent;
  let fixture: ComponentFixture<RegisterBloodBankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterBloodBankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterBloodBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
