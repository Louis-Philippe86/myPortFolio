import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {HardSkills} from "../models/HardSkills";
import {Skill} from "../models/Skill";

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  private apiUrl = 'http://localhost:8080/api/skills';

  constructor(private http: HttpClient) { }

  getSkills(): Observable<Skill> {
    return this.http.get<Skill>(this.apiUrl, {responseType: "json"})
  }

}
