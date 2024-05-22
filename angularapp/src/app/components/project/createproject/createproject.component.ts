import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Project } from 'src/app/models/Project.model';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-createproject',
  templateUrl: './createproject.component.html',
  styleUrls: ['./createproject.component.css']
})

export class CreateprojectComponent implements OnInit {

  id: number;
  formData: Project = { // Use the Loan interface to type the formData object
    ProposalId: null,
    ProjectTitle: null,
    ProjectDescription: "",
    StartDate: null,
    EndDate: null,
    Status: "",
    FrontEndTechStack: "",
    BackendEndTechStack: "",
    Database: ""

  };
  errors: any = {};
  errorMessage: string;
  successPopup: boolean = false;

  constructor(private projectService: ProjectService, private router: Router) { }

  ngOnInit(): void {
    // Initialize your component here
  }

  handleChange(event: any, field: string) {
    this.formData[field] = event.target.value;
    // Validate your form here and set errors if any
  }

  onSubmit(projectForm: NgForm) {
    console.log('Form Validity:', projectForm.valid);
    if (projectForm.valid) {
      this.projectService.addProject(this.formData).subscribe(
        (res) => {
          console.log(res);          
          this.successPopup = true;
          console.log('Project added successfully', res);
          projectForm.resetForm();
        },
        (err) => {
          if (err.status === 500 && err.error.message === 'Project with the same type already exists') {
            this.errorMessage = 'Project with the same type already exists';
          } else {
            this.errors = err.error;
          }
          console.error('Error adding project:', err);
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
      ProposalId: null,
      ProjectTitle: null,
      ProjectDescription: "",
      StartDate: null,
      EndDate: null,
      Status: "",
      FrontEndTechStack: "",
      BackendEndTechStack: "",
      Database: ""
    };
  }
}
