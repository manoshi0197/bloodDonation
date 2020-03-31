import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualFindBloodComponent } from './individual-find-blood.component';

describe('IndividualFindBloodComponent', () => {
  let component: IndividualFindBloodComponent;
  let fixture: ComponentFixture<IndividualFindBloodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividualFindBloodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualFindBloodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
