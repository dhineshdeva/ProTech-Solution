import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl } from 'src/apiconfig';
import { ProjectProposal } from '../models/projectproposal.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectproposalService {

  public apiUrl = apiUrl;

  constructor(private http: HttpClient) {

  }

  addProposal(requestObject: ProjectProposal): Observable<ProjectProposal> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    return this.http.post<ProjectProposal>(`${this.apiUrl}/projectproposal/createproposal`, requestObject, { headers });
  }

  getProposalById(proposalId: number): Observable<ProjectProposal> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    return this.http.get<ProjectProposal>(`${this.apiUrl}/projectproposal/getProposalById${proposalId}`, { headers });
  }
  getAllProposal(): Observable<ProjectProposal[]> {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    return this.http.get<ProjectProposal[]>(`${this.apiUrl}/projectproposal/getAllProposal`, { headers });
  }
  deleteProposal(proposalId: number): Observable<void> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    return this.http.delete<void>(`${this.apiUrl}/projectproposal/deleteProposal/${proposalId}`, { headers });
}

updateProposal(proposalId: number, requestObject: ProjectProposal): Observable<ProjectProposal> {
  const headers = new HttpHeaders({
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  });
  return this.http.put<ProjectProposal>(`${this.apiUrl}/projectproposal/updateProposal/${proposalId}`, requestObject, { headers });
}

}
