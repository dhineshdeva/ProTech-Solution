import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectProposal } from 'src/app/models/projectproposal.model';
import { ProjectproposalService } from 'src/app/services/projectproposal.service';

@Component({
  selector: 'app-createproposal',
  templateUrl: './createproposal.component.html',
  styleUrls: ['./createproposal.component.css']
})

export class CreateproposalComponent implements OnInit {

  id: number;
  formData: ProjectProposal = { // Use the Loan interface to type the formData object
    UserId: null,
    ProposalTitle: "",
    ProposalDescription: "",
    status: "Pending"
  };
  errors: any = {};
  errorMessage: string;
  successPopup: boolean = false;
  constructor(private proposalService: ProjectproposalService) { }
  ngOnInit(): void {
    // Initialize your component here
    this.formData.UserId=Number(localStorage.getItem("userId"))
    console.log(this.formData.UserId);
  }
  handleChange(event: any, field: string) {
    this.formData[field] = event.target.value;
    // Validate your form here and set errors if any
  }

  onSubmit(proposalForm: NgForm) {
    console.log('Form Validity:', proposalForm.value);
    console.log(this.formData)
    if (proposalForm.valid) {
      
      this.proposalService.addProposal(this.formData).subscribe(
        (res) => {
          this.successPopup = true;
          // console.log('Proposal added successfully', res);
          proposalForm.resetForm();
        },
        (err) => {
          if (err.status === 500 && err.error.message === 'Proposal with the same type already exists') {
            this.errorMessage = 'Proposal with the same type already exists';
          } else {
            this.errors = err.error;
          }
          console.error('Error adding Proposal:', err);
        }
      );
    } else {
      this.errorMessage = 'All fields are required';
    }
  }
  handleSuccessMessage() {
    this.successPopup = false;
    this.errorMessage = '';
    this.formData = {
      UserId: null,
      ProposalTitle: "",
      ProposalDescription: "",
      status:"Pending"
    };
  }

}
