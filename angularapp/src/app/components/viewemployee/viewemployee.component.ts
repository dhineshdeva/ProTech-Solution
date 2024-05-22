import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
// import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-viewemployee',
  templateUrl: './viewemployee.component.html',
  styleUrls: ['./viewemployee.component.css']
})
export class ViewemployeeComponent implements OnInit {

  employees: any[] = [];
  showDeletePopup = false;
  feedbackToDelete: string;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.getUserFeedback();
  }

  getUserFeedback() {
    const userId = localStorage.getItem('userId');
    console.log(userId);

    this.authService.getAllEmployees().subscribe(
      (data: any) => {
        this.employees = data;
        console.log(this.employees);
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
