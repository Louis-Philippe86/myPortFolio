import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Project} from "../models/Project";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private apiUrl = environment.apiUrl+'/projects';

  constructor(private http: HttpClient) { }

  getProjects(): Observable<Project> {
    return this.http.get<Project>(this.apiUrl, {responseType: "json"})
  }
  getProjectById(id : number) : Observable<Project>{
    return this.http.get<Project>(`${this.apiUrl}/${id}`,{responseType : "json"})
  }

}
