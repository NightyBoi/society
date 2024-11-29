import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { filter } from 'rxjs';
import { HeaderOtherComponent } from './header/header-other/header-other.component';
import { FooterAltComponent } from './footer/footer-alt/footer-alt.component';
import { HeaderQuizComponent } from './header/header-quiz/header-quiz.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, HeaderOtherComponent, FooterAltComponent, HeaderQuizComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'society';
  currentPath = '';
  footerType = 0;
  headerType = 0;

  constructor(private router: Router){}

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentPath = event.urlAfterRedirects; // Correctly resolves the URL

        if(this.currentPath == '/login' || this.currentPath == '/signup'){
          //this.footerType = 1;
          this.headerType = 1;
        }else if(this.currentPath == '/quiz'){
          this.headerType = 2;
          this.footerType = 2;
        } else{
          this.headerType = 0;
          this.footerType = 0;
        }
      });
  }
}
