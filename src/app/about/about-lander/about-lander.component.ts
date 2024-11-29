import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import Swiper from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

@Component({
  selector: 'app-about-lander',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './about-lander.component.html',
  styleUrl: './about-lander.component.scss'
})
export class AboutLanderComponent implements OnInit {

  ngOnInit(): void {
    const swiper2 = new Swiper('#derma', {
      // Optional parameters
      direction: 'horizontal',
      slidesPerView: 5,
      slidesPerGroup: 1,
      spaceBetween: 20,
      centeredSlides: false,

      breakpoints: {
        // when window width is >= 320px
        0: {
          slidesPerView: 1.2,
          spaceBetween: 20
        },
        450: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        650: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        // when window width is >= 480px
        900: {
          slidesPerView: 3.5,
          spaceBetween: 20
        },
        // when window width is >= 640px
        1100: {
          slidesPerView: 4.5,
          spaceBetween: 20
        }
      }

    });   
  }

}
