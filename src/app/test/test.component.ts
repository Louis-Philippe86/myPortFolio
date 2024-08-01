import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements AfterViewInit {

  index : number = 3
  choice =[
    {option : "Hein ??" , purcent : 2},
    {option : "Novice" , purcent : 20},
    {option : "Débutant" , purcent : 40},
    {option : "Intermediaire" , purcent : 60},
    {option : "Expert" , purcent : 80},
    {option : "Maître de l'univers incontesté" , purcent : 100},
  ]

  skills = [
    { name: 'html 5', value: 80 },
    { name: 'CSS 3', value: 85 },
    { name: 'Bootstrap', value: 75 },
    { name: 'javascript', value: 55 },
    { name: 'jquery', value: 50 },
    { name: 'php', value: 30 },
    { name: 'photoshop', value: 90 }
  ];

  @ViewChild('container', { static: true }) container!: ElementRef;

  ngAfterViewInit() {
    setTimeout(() => this.animateProgressBars(), 0);
  }

  animateProgressBars() {
    const bars = this.container.nativeElement.querySelectorAll('.progress-bar');
    bars.forEach((bar: HTMLElement) => {
      const value = bar.getAttribute('aria-valuenow');
      if (value) {
        bar.style.width = `${value}%`;
      }
    });
  }
  nextChoice() {
    if (this.index < this.choice.length - 1) {
      this.index++;

    }
  }
  previousChoice() {
    if (this.index > 0) {
      this.index--;

    }
  }
}
