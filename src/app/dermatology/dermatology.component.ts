import { Component } from '@angular/core';
import { LanderComponent } from './lander/lander.component';
import { ProductPickerComponent } from './product-picker/product-picker.component';
import { ReviewsComponent } from '../reviews/reviews.component';
import { HowitworksComponent } from '../howitworks/howitworks.component';
import { FaqComponent } from '../faq/faq.component';
import { SkinInCheckComponent } from '../skin-in-check/skin-in-check.component';

@Component({
  selector: 'app-dermatology',
  standalone: true,
  imports: [LanderComponent, ProductPickerComponent, ReviewsComponent, HowitworksComponent, FaqComponent, SkinInCheckComponent],
  templateUrl: './dermatology.component.html',
  styleUrl: './dermatology.component.scss'
})
export class DermatologyComponent {
  acneInfo = {
    title: "Acne Treatment",
    imagePath: "acne-treatment.png"
  }
  acneProducts = [
    {
      name: "Acne Cream",
      price: "$51.77",
      description: "Clears breakouts and prevents future acne.",
      imagePath: "products/acne-1.png"
    },
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

  antiAgeInfo = {
    title: "Anti Aging Treatment",
    imagePath: "anti-age.png"
  }
  antiAgeProducts = [
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
  ];

  rosaceaInfo = {
    title: "Rosacea Treatment",
    imagePath: "rosacea.png"
  };
  rosaceaProducts = [
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

  melasmaInfo = {
    title: "Melasma Treatment",
    imagePath: "melasma.png"
  }

  melasmaProducts = [
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

  dermatologyReviews = [
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
