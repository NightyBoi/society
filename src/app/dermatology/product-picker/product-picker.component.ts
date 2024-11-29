import { Component, Input } from '@angular/core';
import { ProductSliderComponent } from '../../product-slider/product-slider.component';

@Component({
  selector: 'app-product-picker',
  standalone: true,
  imports: [ProductSliderComponent],
  templateUrl: './product-picker.component.html',
  styleUrl: './product-picker.component.scss'
})
export class ProductPickerComponent {
  @Input() productsToSend!: {name: string, price: string, description: string, imagePath: string}[];
  @Input() productsInfo!: {title: string, imagePath: string};
}
