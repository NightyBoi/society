import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit {
  
  ngOnInit(): void {
    const swiper = new Swiper('.swiper', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      autoplay: {
        delay: 0
      },
      centeredSlides: true,
      slidesPerView: 3.5,
      slidesPerGroup: 1,
      speed: 3000,
      allowTouchMove: false,
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        320: {
          slidesPerView: 1.5,
          spaceBetween: 10
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 2,
          spaceBetween: 10
        },
        // when window width is >= 640px
        768: {
          slidesPerView: 3.5,
          spaceBetween: 10
        }
      }
    });   
  }
}
