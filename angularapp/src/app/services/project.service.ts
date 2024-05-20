import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl } from 'src/apiconfig';
import { Project } from '../models/Project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  public apiUrl = apiUrl;

  constructor(private http: HttpClient) {

  }

  addProject(requestObject: Project): Observable<Project> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    return this.http.post<Project>(`${this.apiUrl}/api/project/createProject`, requestObject, { headers });
  }

  getProjectById(projectId: number): Observable<Project> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    return this.http.get<Project>(`${this.apiUrl}/api/project/getProjectById${projectId}`, { headers });
  }
  getAllProject(): Observable<Project[]> {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    return this.http.get<Project[]>(`${this.apiUrl}/api/project/getAllprojects`, { headers });
  }
  deleteProject(projectId: number): Observable<void> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    return this.http.delete<void>(`${this.apiUrl}/api/project/deleteProject/${projectId}`, { headers });
}

updateproject(projectId: number, requestObject: Project): Observable<Project> {
  const headers = new HttpHeaders({
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  });
  return this.http.put<Project>(`${this.apiUrl}/api/project/updateProject/${projectId}`, requestObject, { headers });
}

}
