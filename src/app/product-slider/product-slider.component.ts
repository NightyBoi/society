import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import Swiper from 'swiper/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

@Component({
  selector: 'app-product-slider',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './product-slider.component.html',
  styleUrl: './product-slider.component.scss'
})
export class ProductSliderComponent implements OnInit {

  @Input() products !: {name: string, price: string, description: string, imagePath: string}[];
  @Input() productsTitle!: string;
  @Input() buttonLabel!: string;
  @Input() wider = false;

  ngOnInit(): void {

    let offset = 20;
    let initial = 0;
    let center = false;

    if(this.wider) {
      offset = 40;
      initial = 2;
      center = true;
    }

    const swiperSlider = new Swiper('.swiper-slider', {
      // Optional parameters
      initialSlide: initial,
      direction: 'horizontal',
      slidesPerView: 'auto',
      slidesPerGroup: 1,
      spaceBetween: offset,
      centeredSlides: center

    });   
  }

}
