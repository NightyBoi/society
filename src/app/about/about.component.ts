import { Component } from '@angular/core';
import { AboutLanderComponent } from './about-lander/about-lander.component';
import { CreamComponent } from '../home/cream/cream.component';
import { OurDoctorsComponent } from './our-doctors/our-doctors.component';
import { HowitworkstwoComponent } from '../howitworkstwo/howitworkstwo.component';
import { ProductSliderComponent } from '../product-slider/product-slider.component';
import { SkinInCheckComponent } from '../skin-in-check/skin-in-check.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [AboutLanderComponent, CreamComponent, OurDoctorsComponent, HowitworkstwoComponent, ProductSliderComponent, SkinInCheckComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  completeInfo = "Our Products";

  completeProducts = [
    {
      name: "Tretinoin Cream",
      price: "$53.14",
      description: "Boosts skin renewal and elasticity.",
      imagePath: "products/acne-2.png"
    },
    {
      name: "Niacinamide Cream",
      price: "$52.25",
      description: "Reduces wrinkles and refines texture.",
      imagePath: "products/acne-3.png"
    },
    {
      name: "Acne Cream",
      price: "$51.77",
      description: "Clears breakouts and prevents future acne.",
      imagePath: "products/acne-1.png"
    },
    {
      name: "Azelaic Acid Cream",
      price: "$42.29",
      description: "Evens skin tone and soothes redness.",
      imagePath: "products/acne-4.png"
    },
    {
      name: "Hydroquinone Cream",
      price: "$53.49",
      description: "Brightens skin and fades dark spots.",
      imagePath: "products/acne-5.png"
    },
  ];

  productsReviews = [
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
