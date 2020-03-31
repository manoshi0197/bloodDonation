import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageBloodComponent } from './manage-blood.component';

describe('ManageBloodComponent', () => {
  let component: ManageBloodComponent;
  let fixture: ComponentFixture<ManageBloodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageBloodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageBloodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
