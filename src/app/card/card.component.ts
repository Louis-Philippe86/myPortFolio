import {Component, Input, OnInit} from '@angular/core';
import {NgFor} from "@angular/common";
import {Card} from "../models/card";
import {RouterLink} from "@angular/router";


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit{
  @Input() card! : Card

  ngOnInit() {

  }
}
