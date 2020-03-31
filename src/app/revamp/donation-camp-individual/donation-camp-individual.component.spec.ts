import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationCampIndividualComponent } from './donation-camp-individual.component';

describe('DonationCampIndividualComponent', () => {
  let component: DonationCampIndividualComponent;
  let fixture: ComponentFixture<DonationCampIndividualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonationCampIndividualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationCampIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
