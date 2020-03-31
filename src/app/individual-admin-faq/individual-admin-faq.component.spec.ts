import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualAdminFaqComponent } from './individual-admin-faq.component';

describe('IndividualAdminFaqComponent', () => {
  let component: IndividualAdminFaqComponent;
  let fixture: ComponentFixture<IndividualAdminFaqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividualAdminFaqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualAdminFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
