import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { NgForOf } from "@angular/common";

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements AfterViewInit{

  @Input() skillsList!: any;
  @Input() frameworks!: any;
  @Input() section! : { title : string , logo : string }



  @ViewChild('container', { static: true }) container!: ElementRef;

  ngAfterViewInit() {
    setTimeout(() => this.animateProgressBars(), 500);
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

}
