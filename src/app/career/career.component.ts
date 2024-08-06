import {Component, OnInit} from '@angular/core';
import {NgClass, NgForOf} from "@angular/common";
import {CareerService} from "../services/career.service";

@Component({
  selector: 'app-career',
  standalone: true,
  imports: [
    NgForOf,
    NgClass
  ],
  templateUrl: './career.component.html',
  styleUrl: './career.component.css'
})
export class CareerComponent implements OnInit{

  constructor(private careerService : CareerService) {}
  works! : any

  ngOnInit(): void {
    this.careerService.getCareers().subscribe(career =>{
      this.works = career
    })
  }
}
