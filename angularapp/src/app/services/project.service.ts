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
//  Create a Project
  addProject(requestObject: Project): Observable<Project> {
    console.log(requestObject);    
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('token')
      // "Access-Control-Allow-Origin":"*",
    });    
    return this.http.post<Project>(`${this.apiUrl}/Project/createProject`, requestObject, { headers });
  }
// Get the Project Details by Project ID
  getProjectById(projectId: number): Observable<Project> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    return this.http.get<Project>(`${this.apiUrl}/Project/getProjectById/${projectId}`, { headers });
  }
  //Get all Projects
  getAllProject(): Observable<Project[]> {
    console.log("hai");
    
    const headers = new HttpHeaders({
      "Access-Control-Allow-Origin":"*",
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    return this.http.get<Project[]>(`${this.apiUrl}/Project/getAllProjects`, { headers });
  }
  //Delete a project By project ID
  deleteProject(projectId: number): Observable<void> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    return this.http.delete<void>(`${this.apiUrl}/Project/deleteProject/${projectId}`, { headers });
}
// Update a Project By ProjectID
updateproject(projectId: number, requestObject: Project): Observable<Project> {
  const headers = new HttpHeaders({
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  });
  return this.http.put<Project>(`${this.apiUrl}/Project/updateProject/${projectId}`, requestObject, { headers });
}

}
