import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-viewtask',
  templateUrl: './viewtask.component.html',
  styleUrls: ['./viewtask.component.css']
})
export class ViewtaskComponent implements OnInit {

  
  availableTask: any[] = [];
  showDeletePopup = false;
  taskToDelete: number | null = null;
  searchValue = '';
  sortValue = 0;
  page: number = 1;
  limit = 5;
  maxRecords = 1;
  totalPages = 1;
  status: string = ''; // Add this line
  filteredTask = [];
  searchField = '';
  errorMessage: string = '';
  allTask: any[] = []; // Declare the all task property

  constructor(private router: Router, private taskService: TaskService) {}

  ngOnInit(): void {
    this.fetchAvailableTask();
  }

  fetchAvailableTask() {
    this.taskService.getAllTask().subscribe(
      (data: any) => {
        this.availableTask = data;
        this.maxRecords = this.availableTask.length;
        this.allTask = data; // Populate allcrops with the initial list of crops
        this.totalPages = Math.ceil(this.maxRecords / this.limit);        
        console.log('Available proposal:', this.availableTask);
        this.filteredTask=this.availableTask;
      },
      (error) => {
        // Handle error
        console.error('Error fetching task:', error);
      }
    );
  }
  handleDeleteClick(projectId: number) {
    this.taskToDelete = projectId;
    this.showDeletePopup = true;
  }

  navigateToEditLoan(id: string) {
    // this.router.navigate(['/admin/editloan', id]);
  }

  handleConfirmDelete() {
    if (this.taskToDelete) {
      this.taskService.deleteTask(this.taskToDelete).subscribe(
        (response) => {
          console.log('Task deleted successfully', response);
          this.closeDeletePopup();
          this.fetchAvailableTask();
          this.errorMessage = '';
        },
        (error) => {
          console.error('Error deleting Task:', error);
          this.errorMessage = error.error.message;
        }
      );
    }
  }



  logout() {
    // Implement logout logic
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('userName');
    localStorage.removeItem('userRole');
    this.router.navigate(['/login']);
  }

  closeDeletePopup() {
    this.taskToDelete = null;
    this.showDeletePopup = false;
    this.errorMessage = '';
  }

  updateAvailableProposal(newProposal: any[]) {
    this.availableTask = newProposal;
  }

  handleSearchChange(searchValue: string): void {
    this.searchField = searchValue;
    if (searchValue) {
      this.availableTask = this.filterTask(searchValue);
    } else {
      this.availableTask = this.allTask;
    }
  }

  filterTask(search: string) {
    const searchLower = search.toLowerCase();
    if (searchLower === '') return this.availableTask;
    return this.availableTask.filter(
      (task) =>
        task.cropType.toLowerCase().includes(searchLower) ||
      task.Description.toLowerCase().includes(searchLower)
    );
  }



}
