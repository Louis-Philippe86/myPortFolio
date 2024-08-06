import {Component, Input, OnInit} from '@angular/core';
import {Card} from "./models/card";
import {CommonModule, NgFor} from "@angular/common";
import {RouterLink, RouterLinkActive, RouterModule, RouterOutlet} from "@angular/router";
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {CardListComponent} from "./card-list/card-list.component";
import {PitchComponent} from "./pitch/pitch.component";
import {TestComponent} from "./test/test.component";
import {DatasService} from "./services/datas.service";
import {ScrollService} from "./services/scroll.service";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    RouterModule,
    NgFor,
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    CardListComponent,
    PitchComponent,
    TestComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  @Input() cardMainMenu! : Card[]

  constructor(private datasService : DatasService, private scrollService: ScrollService) {}

  ngOnInit(){
    this.cardMainMenu = this.datasService.getCardsMainMenu()

  }

}
