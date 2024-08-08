import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Card} from "../models/card";

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private apiUrl = 'http://localhost:8080/api/cards';

  constructor(private http: HttpClient) { }

  getCards(): Observable<Card> {
    return this.http.get<Card>(this.apiUrl, {responseType: "json"})

  }

}
