import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeenavComponent } from './employeenav.component';

describe('EmployeenavComponent', () => {
  let component: EmployeenavComponent;
  let fixture: ComponentFixture<EmployeenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
