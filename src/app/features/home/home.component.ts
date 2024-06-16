import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  slides: string[] = [
    'assets/background1.jpeg',
    'assets/background2.jpeg',
    'assets/background3.jpeg'
  ];
  currentSlideIndex: number = 0;
  intervalId: any;
  categories: any[] = [
    { name: 'Fruits', description: 'Des fruits frais et savoureux.' },
    { name: 'Légumes', description: 'Des légumes croquants et nutritifs.' },
    { name: 'Herbes', description: 'Des herbes aromatiques fraîches.' }
  ];

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

  setCurrentSlide(index: number): void {
    this.currentSlideIndex = index;
    this.stopSlideshow();
    this.startSlideshow();
  }
}
