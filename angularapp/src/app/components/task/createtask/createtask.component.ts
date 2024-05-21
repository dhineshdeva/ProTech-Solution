import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-createtask',
  templateUrl: './createtask.component.html',
  styleUrls: ['./createtask.component.css']
})
export class CreatetaskComponent implements OnInit {

  
  id: number;
  formData: Task = { // Use the Loan interface to type the formData object
  
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
  errorMessage: string;
  successPopup: boolean = false;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    // Initialize your component here
  }

  handleChange(event: any, field: string) {
    this.formData[field] = event.target.value;
    // Validate your form here and set errors if any
  }

  onSubmit(taskForm: NgForm) {
    console.log('Form Validity:', taskForm.valid);
    if (taskForm.valid) {
      this.taskService.addTask(this.formData).subscribe(
        (res) => {
          this.successPopup = true;
          console.log('Task added successfully', res);
          taskForm.resetForm();
        },
        (err) => {
          if (err.status === 500 && err.error.message === 'Task with the same type already exists') {
            this.errorMessage = 'Task with the same type already exists';
          } else {
            this.errors = err.error;
          }
          console.error('Error adding Task:', err);
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
  }



}
