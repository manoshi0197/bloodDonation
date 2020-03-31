import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodrequirementComponent } from './bloodrequirement.component';

describe('BloodrequirementComponent', () => {
  let component: BloodrequirementComponent;
  let fixture: ComponentFixture<BloodrequirementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BloodrequirementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodrequirementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
