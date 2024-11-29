import { Component } from '@angular/core';
import { ReviewsComponent } from '../reviews/reviews.component';
import { AllSectionComponent } from './all-section/all-section.component';
import { HowitworkstwoComponent } from '../howitworkstwo/howitworkstwo.component';
import { VerboseComponent } from './verbose/verbose.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [ReviewsComponent, AllSectionComponent, HowitworkstwoComponent, VerboseComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  serviceReviews = [
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
      description: "I've struggled with my weight for as long as I can remember, and nothing ever seemed to work - until this. It feels like I finally have control over my body again.",
      imagePath: "reviews/review-5.png" 
    },
    { 
      title: "Society's support has been amazing.",
      description: "I've always felt stuck in a cycle of dieting and disappointment. But this time, I'm seeing real change, and it feels like a weight has been lifted off my shoulders - both literally and emotionally.",
      imagePath: "reviews/review-6.png" 
    }
  ]
}
