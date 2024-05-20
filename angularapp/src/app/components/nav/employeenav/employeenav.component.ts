import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-employeenav',
  templateUrl: './employeenav.component.html',
  styleUrls: ['./employeenav.component.css']
})
export class EmployeenavComponent implements OnInit {
  isLoggedIn: boolean = false;
  isEmployee: boolean = false;
  
  constructor(private authService: AuthService) {
    this.authService.isAuthenticated$.subscribe((authenticated: boolean) => {
      this.isLoggedIn = authenticated;
      if (this.isLoggedIn) {
        this.isEmployee = this.authService.isEmployee();
        console.log(this.isEmployee);
      } else {
        this.isEmployee = false;
      }
    });
  }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isAuthenticated();
    if (this.isLoggedIn) {
      this.isEmployee = this.authService.isEmployee();
    }
    console.log(this.isEmployee);
  }


}
