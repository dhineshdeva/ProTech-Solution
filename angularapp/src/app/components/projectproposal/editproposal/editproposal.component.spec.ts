import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditproposalComponent } from './editproposal.component';

describe('EditproposalComponent', () => {
  let component: EditproposalComponent;
  let fixture: ComponentFixture<EditproposalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditproposalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditproposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
