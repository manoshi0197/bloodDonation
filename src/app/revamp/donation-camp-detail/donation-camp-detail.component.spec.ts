import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationCampDetailComponent } from './donation-camp-detail.component';

describe('DonationCampDetailComponent', () => {
  let component: DonationCampDetailComponent;
  let fixture: ComponentFixture<DonationCampDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonationCampDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationCampDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
