import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cream',
  standalone: true,
  imports: [],
  templateUrl: './cream.component.html',
  styleUrl: './cream.component.scss'
})
export class CreamComponent {
  @Input() flipped = false;
}
