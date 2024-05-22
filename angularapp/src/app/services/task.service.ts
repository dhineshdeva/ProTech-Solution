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
    return this.http.post<Task>(`${this.apiUrl}/tasks/createTask/`, requestObject, { headers });
  }

  getTaskById(taskId: number): Observable<Task> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    return this.http.get<Task>(`${this.apiUrl}/Tasks/getTaskById/${taskId}`, { headers });
  }
  getAllTask(): Observable<Task[]> {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    return this.http.get<Task[]>(`${this.apiUrl}/Tasks/getAllTasks`, { headers });
  }
  deleteTask(taskId: number): Observable<void> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    return this.http.delete<void>(`${this.apiUrl}/Tasks/deleteTask/${taskId}`, { headers });
  }

  updateTask(taskId: number, requestObject: Task): Observable<Task> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    return this.http.put<Task>(`${this.apiUrl}/Tasks/updateTask/${taskId}`, requestObject, { headers });
  }

  getTaskByUserId(userId: number): Observable<Task> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    return this.http.get<Task>(`${this.apiUrl}/Tasks/getTaskByUserId/${userId}`, { headers });
  }

}