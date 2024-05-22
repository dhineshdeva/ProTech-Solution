import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/models/Project.model';
import { ProjectService } from 'src/app/services/project.service';


@Component({
  selector: 'app-editproject',
  templateUrl: './editproject.component.html',
  styleUrls: ['./editproject.component.css']
})
export class EditprojectComponent implements OnInit {

  allStatus = [
    "Pending",
    "Rejected",
    "Approved"
  ]
  id: number;
  errorMessage: string = '';
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
  successPopup: boolean; // Add this line to declare the successPopup property

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projectService: ProjectService
  ) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
   

    this.getProjectById();
    console.log(this.id);
    console.log(this.formData);
    
    
  }

  getProjectById() {
    this.projectService.getProjectById(this.id).subscribe(
      (response) => {
        console.log('Project details:', response);
        this.formData = {
          ProjectId: response.ProjectId,
          ProposalId:response.ProposalId,
          ProjectTitle: response.ProjectTitle,
          ProjectDescription: response.ProjectDescription,
          StartDate:new Date(response.StartDate),
          EndDate:new  Date(response.EndDate),
          Status: response.Status,
          FrontEndTechStack: response.FrontEndTechStack,
          BackendEndTechStack: response.BackendEndTechStack,
          Database: response.Database

        };
       
        
      },
      (error) => {
        console.error('Error fetching Project details:', error);
        this.router.navigate(['/error']);
      }
    );
    
  }

  handleChange(event: any, field: string) {
    this.formData[field] = event.target.value;
    this.errors[field] = ''; // Clear error when the user makes a change
  }

  handleUpdateLoan(projectForm: NgForm) {
    if (projectForm.valid) {
      this.projectService.updateproject(this.id, this.formData).subscribe(
        (response) => {
          console.log('Project updated successfully', response);
          this.successPopup = true;
          this.errorMessage = '';
        },
        (error) => {
          console.error('Error updating Project:', error);
          this.errorMessage = error.error.message;
        }
      );
    }
  }

  handleOkClick() {
    // Close the success popup
    this.successPopup = false;
    this.router.navigate(['/employee/project/view']);
  }

  navigateToDashboard() {
    this.router.navigate(['/employee/Project/view']);
  }


   
}
