import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, OnDestroy {
  slides: string[] = [
    'assets/background1.jpeg',
    'assets/background2.jpeg',
    'assets/background3.jpeg'
  ];
  currentSlideIndex: number = 0;
  intervalId: any;

  ngOnInit(): void {
    this.startSlideshow();
  }

  ngOnDestroy(): void {
    this.stopSlideshow();
  }

  startSlideshow(): void {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 5000); // Change image every 5 seconds
  }

  stopSlideshow(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  nextSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
  }

  prevSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex - 1 + this.slides.length) % this.slides.length;
  }

  setSlide(index: number): void {
    this.currentSlideIndex = index;
    this.stopSlideshow();
    this.startSlideshow();
  }
}
