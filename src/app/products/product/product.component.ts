import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CarouselModule, RouterModule, AccordionModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  activeIndex = 0;
  currentSelection: number = 0;

  changeSelection(newSelection: number){
    if(this.currentSelection == newSelection){
      this.currentSelection = 0;
    }else{
      this.currentSelection = newSelection;
    }
  }

  switchIndex(index: number){
    this.activeIndex = index;
  }

}
