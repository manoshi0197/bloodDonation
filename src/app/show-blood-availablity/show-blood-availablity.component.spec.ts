import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBLoodAvailablityComponent } from './show-blood-availablity.component';

describe('ShowBLoodAvailablityComponent', () => {
  let component: ShowBLoodAvailablityComponent;
  let fixture: ComponentFixture<ShowBLoodAvailablityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowBLoodAvailablityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowBLoodAvailablityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
