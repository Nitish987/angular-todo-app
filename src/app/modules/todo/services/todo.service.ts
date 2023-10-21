import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { ServerApi } from 'src/app/settings/constants/constant';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient, private authorizationService: AuthorizationService) { }

  addTask(title: string, description: string): Observable<any> {
    return this.http.post(`${ServerApi.url}/todo/add`, {
      title, description
    }, {
      headers: {
        Authorization: this.authorizationService.getAuthenticationToken()
      }
    });
  }

  editTask(id: number, title: string, description: string): Observable<any> {
    return this.http.put(`${ServerApi.url}/todo/update/${id}`, {
      title, description
    }, {
      headers: {
        Authorization: this.authorizationService.getAuthenticationToken()
      }
    });
  }

  listTask(): Observable<any> {
    return this.http.get(`${ServerApi.url}/todo/list`, {
      headers: {
        Authorization: this.authorizationService.getAuthenticationToken()
      }
    });
  }

  markAsComplete(id: number, isCompleted: boolean): Observable<any> {
    return this.http.put(`${ServerApi.url}/todo/completed/${id}`, {
      isCompleted: isCompleted
    }, {
      headers: {
        Authorization: this.authorizationService.getAuthenticationToken()
      }
    });
  }

  deleteTask(id: number): Observable<any> {
    return this.http.delete(`${ServerApi.url}/todo/delete/${id}`, {
      headers: {
        Authorization: this.authorizationService.getAuthenticationToken()
      }
    });
  }
}
