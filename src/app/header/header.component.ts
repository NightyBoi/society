import { Component, ElementRef, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  selectedDropdown: number = 0;

  constructor(private eRef: ElementRef){}

  toggleDropdown(dropdown: number){
    if(this.selectedDropdown == dropdown){
      this.selectedDropdown = 0;
    }else{
      this.selectedDropdown = dropdown;
    }
  }

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: MouseEvent) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.selectedDropdown = 0;
    }
  }
}
