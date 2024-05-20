import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteproposalComponent } from './deleteproposal.component';

describe('DeleteproposalComponent', () => {
  let component: DeleteproposalComponent;
  let fixture: ComponentFixture<DeleteproposalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteproposalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteproposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
