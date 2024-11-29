import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-howitworkstwo',
  standalone: true,
  imports: [],
  templateUrl: './howitworkstwo.component.html',
  styleUrl: './howitworkstwo.component.scss'
})
export class HowitworkstwoComponent {
  @Input() whiten = false;
}
