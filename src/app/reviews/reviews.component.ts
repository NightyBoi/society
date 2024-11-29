import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss'
})
export class ReviewsComponent {

  @Input() reviews !: {title: string, description: string, imagePath: string}[];
  @Input() reviewsTitle !: string;
  @Input() whiten = false;
}
