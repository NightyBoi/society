import { Component, Input } from '@angular/core';
import { AccordionModule } from 'ngx-bootstrap/accordion';

@Component({
  selector: 'app-faq-lister',
  standalone: true,
  imports: [AccordionModule],
  templateUrl: './faq-lister.component.html',
  styleUrl: './faq-lister.component.scss'
})
export class FaqListerComponent {

  currentSelection: number = 0;
  @Input() faqTitle !: string;
  @Input() faqSource !: {question: string, answer: string}[];

  changeSelection(newSelection: number){
    if(this.currentSelection == newSelection){
      this.currentSelection = 0;
    }else{
      this.currentSelection = newSelection;
    }
  }

}
