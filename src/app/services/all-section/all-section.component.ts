import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import Swiper from 'swiper/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

@Component({
  selector: 'app-all-section',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './all-section.component.html',
  styleUrl: './all-section.component.scss'
})
export class AllSectionComponent implements OnInit {

  ngOnInit(): void {
    const swiper = new Swiper('.swiper', {
      // Optional parameters
      initialSlide: 1,
      direction: 'horizontal',
      slidesPerView: 5,
      slidesPerGroup: 1,
      spaceBetween: 20,
      centeredSlides: true,

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
