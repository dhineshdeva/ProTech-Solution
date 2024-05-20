import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-viewproject',
  templateUrl: './viewproject.component.html',
  styleUrls: ['./viewproject.component.css']
})
export class ViewprojectComponent implements OnInit {

  
  availableproject: any[] = [];
  showDeletePopup = false;
  projectToDelete: number | null = null;
  searchValue = '';
  sortValue = 0;
  page: number = 1;
  limit = 5;
  maxRecords = 1;
  totalPages = 1;
  status: string = ''; // Add this line
  filteredproject = [];
  searchField = '';
  errorMessage: string = '';
  allProject: any[] = []; // Declare the allProject property

  constructor(private router: Router, private projectService: ProjectService) {}

  ngOnInit(): void {
    this.fetchAvailableProject();
  }

  fetchAvailableProject() {
    this.projectService.getAllProject().subscribe(
      (data: any) => {
        this.availableproject = data;
        this.maxRecords = this.availableproject.length;
        this.allProject = data; // Populate allcrops with the initial list of crops
        this.totalPages = Math.ceil(this.maxRecords / this.limit);        
        console.log('Available proposal:', this.availableproject);
        this.filteredproject=this.availableproject;
      },
      (error) => {
        // Handle error
        console.error('Error fetching Proposal:', error);
      }
    );
  }
  handleDeleteClick(projectId: number) {
    this.projectToDelete = projectId;
    this.showDeletePopup = true;
  }

  navigateToEditLoan(id: string) {
    // this.router.navigate(['/admin/editloan', id]);
  }

  handleConfirmDelete() {
    if (this.projectToDelete) {
      this.projectService.deleteProject(this.projectToDelete).subscribe(
        (response) => {
          console.log('Project deleted successfully', response);
          this.closeDeletePopup();
          this.fetchAvailableProject();
          this.errorMessage = '';
        },
        (error) => {
          console.error('Error deleting Project:', error);
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
    this.projectToDelete = null;
    this.showDeletePopup = false;
    this.errorMessage = '';
  }

  updateAvailableProposal(newProposal: any[]) {
    this.availableproject = newProposal;
  }

  handleSearchChange(searchValue: string): void {
    this.searchField = searchValue;
    if (searchValue) {
      this.availableproject = this.filterProject(searchValue);
    } else {
      this.availableproject = this.allProject;
    }
  }

  filterProject(search: string) {
    const searchLower = search.toLowerCase();
    if (searchLower === '') return this.availableproject;
    return this.availableproject.filter(
      (project) =>
        project.cropType.toLowerCase().includes(searchLower) ||
      project.Description.toLowerCase().includes(searchLower)
    );
  }


}
