import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Card} from "../models/Card";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private apiUrl = environment.apiUrl+'/cards';

  constructor(private http: HttpClient) { }

  getCards(): Observable<Card> {
    return this.http.get<Card>(this.apiUrl, {responseType: "json"})

  }

}
