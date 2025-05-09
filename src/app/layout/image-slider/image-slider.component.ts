import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-image-slider',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './image-slider.component.html',
  styleUrl: './image-slider.component.scss',
})
export class ImageSliderComponent implements OnInit {
  @Input() slides: any[] = [];
  @Input() animationSpeed: number = 220; 
  @Input() indicatorsVisibility = true;

  currentSlide = 0;
  hidden = false;
  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;

  ngOnInit(): void {}

  next() {
   
    let currentSlide = (this.currentSlide + 1) % this.slides.length;
    this.jumpToSlide(currentSlide);
    
  }

  previous() {
    
       let currentSlide =  (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    this.jumpToSlide(currentSlide);
  }

  jumpToSlide(index: number) {
    this.hidden = true;
    setTimeout(()=>{this.currentSlide = index; this.hidden = false;},this.animationSpeed)
  }
}
