import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateproposalComponent } from './createproposal.component';

describe('CreateproposalComponent', () => {
  let component: CreateproposalComponent;
  let fixture: ComponentFixture<CreateproposalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateproposalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateproposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
