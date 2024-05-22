import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectProposal } from 'src/app/models/projectproposal.model';
import { ProjectproposalService } from 'src/app/services/projectproposal.service';

@Component({
  selector: 'app-editproposal',
  templateUrl: './editproposal.component.html',
  styleUrls: ['./editproposal.component.css']
})
export class EditproposalComponent implements OnInit {

  allStatus=[
    "Pending",
    "Rejected",
    "Approved"
  ]
  id: number;
  errorMessage: string = '';
  formData: ProjectProposal = { // Use the Loan interface to type the formData object
    ProposalId: null,
    UserId: null,
    ProposalTitle: "",
    ProposalDescription: "",
    status: "",
  };
  errors: any = {};
  successPopup: boolean; // Add this line to declare the successPopup property

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private proposalService: ProjectproposalService
  ) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(this.id)

    this.getProposalById();
    console.log("welocme")
  }

  getProposalById() {
    this.proposalService.getProposalById(this.id).subscribe(
      (response) => {
        console.log('Loan details:', response);
        this.formData = {
          ProposalId:response.ProposalId,
          ProposalTitle: response.ProposalTitle,
          ProposalDescription: response.ProposalDescription,
          status: response.status,
          UserId:response.UserId
          
        };
      },
      (error) => {
        console.error('Error fetching proposal details:', error);
        this.router.navigate(['/error']);
      }
    );
  }

  handleChange(event: any, field: string) {
    this.formData[field] = event.target.value;
    this.errors[field] = ''; // Clear error when the user makes a change
  }

  handleUpdateLoan(proposalForm: NgForm) {
    if (proposalForm.valid) {
      this.proposalService.updateProposal(this.id, this.formData).subscribe(
        (response) => {
          console.log('Proposal updated successfully', response);
          this.successPopup = true;
          this.errorMessage = '';
        },
        (error) => {
          console.error('Error updating Proposal:', error);
          this.errorMessage = error.error.message;
        }
      );
    }
  }

  handleOkClick() {
    // Close the success popup
    this.successPopup = false;
    this.router.navigate(['/employee/proposal/view']);
  }

  navigateToDashboard() {
    this.router.navigate(['/employee/proposal/view']);
  }

}
