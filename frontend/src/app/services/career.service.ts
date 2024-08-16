import { Injectable } from '@angular/core';
import {Career} from "../models/Career";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class CareerService {

  private apiUrl = environment.apiUrl+'/careers';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getCareers(): Observable<Career> {
    return this.http.get<Career>(this.apiUrl, {responseType: "json"})

  }

}
