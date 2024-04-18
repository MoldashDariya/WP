import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent implements OnInit{

  items: string[] = ['https://www.bankrate.com/2018/02/01124641/7-tactics-car-salesman-dont-want-you-to-know.jpg',
  'https://almalife.kz/images/news/BlueStar-2.jpg',
  'https://strg2.nm.kz/neofiles/serve-image/61c432d580eb200008f60422/1190x500/q90'];
  currentIndex = 0;

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.next();
    }, 3000);
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
  }

}
