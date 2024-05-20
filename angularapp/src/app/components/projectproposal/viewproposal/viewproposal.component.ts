import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectproposalService } from 'src/app/services/projectproposal.service';

@Component({
  selector: 'app-viewproposal',
  templateUrl: './viewproposal.component.html',
  styleUrls: ['./viewproposal.component.css']
})
export class ViewproposalComponent implements OnInit {

  availableProposal: any[] = [];
  showDeletePopup = false;
  proposalToDelete: number | null = null;
  searchValue = '';
  sortValue = 0;
  page: number = 1;
  limit = 5;
  maxRecords = 1;
  totalPages = 1;
  status: string = ''; // Add this line
  filteredproposal = [];
  searchField = '';
  errorMessage: string = '';
  allProposal: any[] = []; // Declare the allcrops property

  constructor(private router: Router, private proposalService: ProjectproposalService) {}

  ngOnInit(): void {
    this.fetchAvailableProposal();
  }

  fetchAvailableProposal() {
    this.proposalService.getAllProposal().subscribe(
      (data: any) => {
        this.availableProposal = data;
        this.maxRecords = this.availableProposal.length;
        this.allProposal = data; // Populate allcrops with the initial list of crops
        this.totalPages = Math.ceil(this.maxRecords / this.limit);        
        console.log('Available proposal:', this.availableProposal);
        this.filteredproposal=this.availableProposal;
      },
      (error) => {
        // Handle error
        console.error('Error fetching Proposal:', error);
      }
    );
  }
  handleDeleteClick(proposalId: number) {
    this.proposalToDelete = proposalId;
    this.showDeletePopup = true;
  }

  navigateToEditLoan(id: string) {
    // this.router.navigate(['/admin/editloan', id]);
  }

  handleConfirmDelete() {
    if (this.proposalToDelete) {
      this.proposalService.deleteProposal(this.proposalToDelete).subscribe(
        (response) => {
          console.log('Crop deleted successfully', response);
          this.closeDeletePopup();
          this.fetchAvailableProposal();
          this.errorMessage = '';
        },
        (error) => {
          console.error('Error deleting Proposal:', error);
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
    this.proposalToDelete = null;
    this.showDeletePopup = false;
    this.errorMessage = '';
  }

  updateAvailableProposal(newProposal: any[]) {
    this.availableProposal = newProposal;
  }

  handleSearchChange(searchValue: string): void {
    this.searchField = searchValue;
    if (searchValue) {
      this.availableProposal = this.filterProposal(searchValue);
    } else {
      this.availableProposal = this.allProposal;
    }
  }

  filterProposal(search: string) {
    const searchLower = search.toLowerCase();
    if (searchLower === '') return this.availableProposal;
    return this.availableProposal.filter(
      (proposal) =>
        proposal.cropType.toLowerCase().includes(searchLower) ||
      proposal.Description.toLowerCase().includes(searchLower)
    );
  }


}
