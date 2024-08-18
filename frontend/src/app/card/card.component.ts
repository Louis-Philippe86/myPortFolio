import {Component, Input} from '@angular/core';
import {NgFor, NgIf} from "@angular/common";
import {Card} from "../models/Card";
import {RouterLink} from "@angular/router";
import {Project} from "../models/Project";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgFor, RouterLink, NgIf],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent{
  @Input() card! : Card
  @Input() project! : Project

  //Prioristaion du lien github sur le liens du projet
  onGithubLinkClick(event: MouseEvent): void {
    event.stopPropagation();
  }
}
