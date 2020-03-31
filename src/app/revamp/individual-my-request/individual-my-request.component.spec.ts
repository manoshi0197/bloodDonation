import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualMyRequestComponent } from './individual-my-request.component';

describe('IndividualMyRequestComponent', () => {
  let component: IndividualMyRequestComponent;
  let fixture: ComponentFixture<IndividualMyRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividualMyRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualMyRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
