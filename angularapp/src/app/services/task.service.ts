import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';
import { Observable } from 'rxjs';
import { apiUrl } from 'src/apiconfig';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  public apiUrl = apiUrl;

  constructor(private http: HttpClient) {

  }

  addTask(requestObject: Task): Observable<Task> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    return this.http.post<Task>(`${this.apiUrl}/task/createTask/`, requestObject, { headers });
  }

  getTaskById(taskId: number): Observable<Task> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    return this.http.get<Task>(`${this.apiUrl}/tasks/getTaskById/${taskId}`, { headers });
  }
  getAllTask(): Observable<Task[]> {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    return this.http.get<Task[]>(`${this.apiUrl}/agrochemical/getAllTask`, { headers });
  }
  deleteTask(taskId: number): Observable<void> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    return this.http.delete<void>(`${this.apiUrl}/agrochemical/deleteTask/${taskId}`, { headers });
}

updateTask(taskId: number, requestObject: Task): Observable<Task> {
  const headers = new HttpHeaders({
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  });
  return this.http.put<Task>(`${this.apiUrl}/agrochemical/updateTask/${taskId}`, requestObject, { headers });
}

}
