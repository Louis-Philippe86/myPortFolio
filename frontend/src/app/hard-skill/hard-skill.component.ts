import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { NgForOf } from "@angular/common";

@Component({
  selector: 'app-hard-skill',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './hard-skill.component.html',
  styleUrls: ['./hard-skill.component.css']
})
export class HardSkillComponent implements AfterViewInit{

  @Input() skillsList!: any;
  @Input() frameworks!: any;
  @Input() section! : { title : string , logo : string }



  @ViewChild('container', { static: true }) container!: ElementRef;

  //Attente du chargement de la page avant animation des progress-bar
  ngAfterViewInit() {
    setTimeout(() => this.animateProgressBars(), 4000);
  }

  //animation des progress-bar
  animateProgressBars() {
    const bars = this.container.nativeElement.querySelectorAll('.progress-bar');
    bars.forEach((bar: HTMLElement) => {
      const value = bar.getAttribute('aria-valuenow');
      if (value) {
        bar.style.width = `${value}%`;
      }
    });
  }

}
