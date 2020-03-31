import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationCampListComponent } from './donation-camp-list.component';

describe('DonationCampListComponent', () => {
  let component: DonationCampListComponent;
  let fixture: ComponentFixture<DonationCampListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonationCampListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationCampListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
