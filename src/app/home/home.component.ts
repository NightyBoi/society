import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { WhatisComponent } from './whatis/whatis.component';
import { LowerComponent } from './lower/lower.component';
import { IngredientsComponent } from "./ingredients/ingredients.component";
import { ReviewsComponent } from "../reviews/reviews.component";
import { CreamComponent } from "./cream/cream.component";
import { WhatmakesComponent } from "./whatmakes/whatmakes.component";
import { HowitworksComponent } from "../howitworks/howitworks.component";
import { FaqComponent } from "../faq/faq.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, WhatisComponent, LowerComponent, IngredientsComponent, ReviewsComponent, CreamComponent, WhatmakesComponent, HowitworksComponent, FaqComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  homeReviews = [
    { 
      title: "Society's tretinoin cream works wonders.",
      description: "I have sensitive skin & couldn't find the solution. I was getting too desperate and even the doctors couldn't help me.",
      imagePath: "reviews/review-1.png" 
    },
    { 
      title: "I've tried everything, but I found my miracle.",
      description: "I've battled with acne since my teens, and nothing helped until now. My skin is clearer and smoother than ever.",
      imagePath: "reviews/review-2.png" 
    },
    { 
      title: "I have never felt and looked my best.",
      description: "I've struggled with my acne for as long as I can remember, and nothing ever seemed to work - until this. It feels like I finally have control over my skin again.",
      imagePath: "reviews/review-3.png" 
    },
    { 
      title: "Society's support has been amazing.",
      description: "I've always felt stuck in a cycle of constant treatments and disappointment. But this time, I'm seeing real change, and it feels like a weight has been lifted off my shoulders with resolving my acne. ",
      imagePath: "reviews/review-4.png" 
    }
  ]
}
