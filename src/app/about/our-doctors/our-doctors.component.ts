import { Component } from '@angular/core';
import { AccordionModule } from 'ngx-bootstrap/accordion';

@Component({
  selector: 'app-our-doctors',
  standalone: true,
  imports: [AccordionModule],
  templateUrl: './our-doctors.component.html',
  styleUrl: './our-doctors.component.scss'
})
export class OurDoctorsComponent {

  currentSelection: number = 0;
  doctorActive = [true, true, true, true, true, true];

  changeSelection(newSelection: number){
    this.doctorActive[newSelection] = !this.doctorActive[newSelection];
  }

}
