import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "./user/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {


  private apiUrl = 'http://localhost:8080/api/users';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User> {
    return this.http.get<User>(this.apiUrl, {responseType: "json"})

  }

}
