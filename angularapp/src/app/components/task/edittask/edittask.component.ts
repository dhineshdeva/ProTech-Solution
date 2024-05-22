import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/models/task.model';
import { AuthService } from 'src/app/services/auth.service';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-edittask',
  templateUrl: './edittask.component.html',
  styleUrls: ['./edittask.component.css']
})
export class EdittaskComponent implements OnInit {

  allStatus = [
    "Pending",
    "Rejected",
    "Approved"
  ]
  isEmployee:boolean;
  id: number;
  errorMessage: string = '';
  formData: Task = { // Use the Loan interface to type the formData object
    TaskId:null,
    ProjectId:null,
    TaskTitle:null,
    TaskDescription:"",
    AssignedTo:null,
    Status:"",
    DueDate:null,
    StartDate:null,
    CompletedDate:null,
    Priority:""
  };
  errors: any = {};
  successPopup: boolean; // Add this line to declare the successPopup property

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskService: TaskService,
    private authservice:AuthService
  ) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.isEmployee=this.authservice.isEmployee();
    this.getTaskById();
    console.log(this.id);
    console.log(this.formData);   
    
  }

  getTaskById() {
    this.taskService.getTaskById(this.id).subscribe(
      (response) => {
        console.log('Task details:', response);
        this.formData = {
          TaskId:response.TaskId,
          ProjectId:response.ProjectId,
          TaskTitle:response.TaskTitle,
          TaskDescription:response.TaskDescription,
          AssignedTo:response.AssignedTo,
          Status:response.Status,
          DueDate:response.DueDate,
          StartDate:response.StartDate,
          CompletedDate:response.CompletedDate,
          Priority:response.Priority
        };
       
        
      },
      (error) => {
        console.error('Error fetching Task details:', error);
        this.router.navigate(['/error']);
      }
    );
    
  }

  handleChange(event: any, field: string) {
    this.formData[field] = event.target.value;
    this.errors[field] = ''; // Clear error when the user makes a change
  }

  handleUpdateTask(taskForm: NgForm) {
    if (taskForm.valid) {
      this.taskService.updateTask(this.id, this.formData).subscribe(
        (response) => {
          console.log('Task updated successfully', response);
          this.successPopup = true;
          this.errorMessage = '';
        },
        (error) => {
          console.error('Error updating Task:', error);
          this.errorMessage = error.error.message;
        }
      );
    }
  }

  handleOkClick() {
    // Close the success popup
    this.successPopup = false;
    this.router.navigate(['/manager/task/view']);
  }

  navigateToDashboard() {
    if(this.isEmployee)
      {
        this.router.navigate(['/employee/task/view']);
      }
      else{
        this.router.navigate(['/manager/task/view']);
      }
    
  }

}
