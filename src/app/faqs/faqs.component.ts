import { Component, OnInit } from '@angular/core';
import { FaqListerComponent } from './faq-lister/faq-lister.component';

@Component({
  selector: 'app-faqs',
  standalone: true,
  imports: [FaqListerComponent],
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.scss'
})
export class FaqsComponent implements OnInit {

  currentIndex = 0;
  currentFAQ !: {question: string, answer: string}[];
  titleText = "About Society";
  aboutFAQ = [
    {
      question: "What is Society?",
      answer: "Society is a telehealth platform that connects you with licensed dermatology providers for personalized skin assessments and prescriptions. This allows you to receive expert skincare guidance and treatment from the comfort of your home."
    },
    {
      question: "How does telehealth work with Society?",
      answer: "Society's telehealth service connects you with licensed dermatology providers through a secure, online platform. After creating your profile, you'll complete a health and skin questionnaire, upload photos, and describe your skin concerns. A provider will then review your information and prescribe a custom treatment plan tailored to your needs."
    },
    {
      question: "Who are the healthcare providers on the Society Health platform?",
      answer: "Our dermatology providers are licensed professionals with extensive experience in skin care. We match you with a provider licensed in your state who will oversee your treatment and be available to answer questions."
    },
    {
      question: "Is telehealth effective for skin conditions?",
      answer: "Yes, telehealth can be highly effective for diagnosing and treating common skin concerns like acne, aging, and hyperpigmentation. Society's licensed providers use detailed questionnaires and photos to create customized treatments that address your specific concerns, just as they would in an in-person visit."
    },
    {
      question: "What if I have a reaction to my medication?",
      answer: "If you experience a reaction, stop using the product and reach out to your Society provider immediately. Our team can adjust your treatment plan and may prescribe alternative ingredients to better suit your skin's sensitivity."
    },
    {
      question: "Can I use any pharmacy?",
      answer: "For accuracy and consistency, all prescriptions are filled by our partner pharmacies. This ensures that your custom formula is compounded precisely to the specifications set by your provider."
    },
    {
      question: "I'm under 18. Can I still use Society Health?",
      answer: "Society Health services are available to individuals 18 and older. If you're under 18, you may need parental consent or a parent's assistance to explore other dermatology options."
    },
    {
      question: "Will I chat with my assigned Society Health physician?",
      answer: "Yes, your assigned provider will be available for messaging through your Society Health account. This allows you to ask questions and get support anytime during your treatment."
    },
    {
      question: "Is my information safe?",
      answer: "Absolutely. Society Health complies with HIPAA regulations and uses advanced encryption methods to protect your personal and medical information."
    },
    {
      question: "What states are you available in?",
      answer: "Society Health is currently available in most U.S. states. Please check our website for a full list of supported states, as availability may vary based on state-specific telemedicine regulations."
    },
  ]

  pricingFAQ = [
    {
      question: "Can I use my insurance?",
      answer: "Currently, Society does not accept insurance. However, our services and treatments are designed to be affordable and accessible, providing customized care without the need for traditional insurance coverage."
    },
    {
      question: "How much does a telemedicine evaluation cost?",
      answer: "A one-time telemedicine evaluation with a licensed provider is included absolutely FREE of charge with your first order. This initial assessment ensures we fully understand your skin's needs before prescribing a custom treatment."
    },
    {
      question: "What if my application is rejected?",
      answer: "If your application is rejected, it usually means that Society's providers determined telehealth may not be the safest or most effective option for your specific needs. This could be due to medical history, a condition outside our current scope, or other health factors. If this happens, our team will provide guidance on next steps and may recommend consulting with a local in-person healthcare provider to ensure you receive the best care possible."
    },
    {
      question: "When am I charged for my medication?",
      answer: "You are charged during checkout for your initial order. For refills, charges are applied at the time of shipment, ensuring timely delivery without interruptions to your skincare routine."
    },
    {
      question: "When will I receive my order?",
      answer: "Orders are typically processed within 1-3 business days. Once shipped, delivery usually takes 3-7 days, depending on your location. You will receive tracking details via email to monitor your package."
    },
    {
      question: "How do I cancel my subscription order?",
      answer: "You can cancel your subscription anytime by logging into your Society account or reaching out to our customer support team. Please cancel at least 5 days before your next scheduled shipment to avoid being charged."
    },
    {
      question: "Can I change my treatment?",
      answer: "Yes, if you feel your current treatment isn't addressing your needs, you can request a reassessment with your provider. Adjustments are easily made to ensure you always have the best formula for your skin's current state."
    },
  ];

  ingredientsFAQ = [
    {
      question: "What is Tretinoin?",
      answer: "Tretinoin is a prescription-grade retinoid derived from Vitamin A, commonly used to address skin concerns like acne, fine lines, and hyperpigmentation. It's one of the most effective ingredients for promoting skin cell turnover and improving skin texture."
    },
    {
      question: "How does Tretinoin work?",
      answer: "Tretinoin works by accelerating cell turnover, helping to shed dead skin cells and make way for newer, healthier skin. It also stimulates collagen production, improving skin firmness and texture over time."
    },
    {
      question: "How does Tretinoin help with anti-aging?",
      answer: "Tretinoin targets signs of aging by increasing cell turnover and boosting collagen production. This helps reduce the appearance of fine lines, wrinkles, and sun damage, resulting in smoother, firmer skin."
    },
    {
      question: "How does Tretinoin treat acne?",
      answer: "Tretinoin clears acne by preventing pores from becoming clogged. Its exfoliating effect reduces the buildup of dead skin cells that can trap oil and bacteria, thereby minimizing breakouts and preventing new ones."
    },
    {
      question: "How does Tretinoin help correct dark spots?",
      answer: "By accelerating cell turnover, Tretinoin helps fade areas of hyperpigmentation, such as dark spots, melasma, and sunspots. Regular use can result in a more even, radiant complexion by lightening these darkened areas over time."
    },
    {
      question: "What ingredients are included in Society's Tretinoin-based formulations?",
      answer: `<p>Our tretinoin-based formulations are crafted with specific ingredients to address a range of skin concerns:</p>
      
      <ul>
        <li><b>For Melasma, Dark Spots, and Skin Lightening:</b> We combine tretinoin with hydroquinone, kojic acid, niacinamide, and fluocinolone to target hyperpigmentation. Hydroquinone and kojic acid lighten dark spots, niacinamide brightens and strengthens the skin barrier, and fluocinolone reduces inflammation for a balanced, effective skin lightening solution. Ascorbic acid (Vitamin C) is sometimes added to further brighten and protect the skin.</li>
        <li><b>For Acne:</b> Our acne formulations blend tretinoin with sulfacetamide sodium, sulfur, and niacinamide. Sulfacetamide reduces acne-causing bacteria, sulfur controls excess oil, and niacinamide helps to reduce inflammation and improve skin texture, creating a powerful combination for clearer skin.</li>
        <li><b>For Anti-Aging:</b> To combat signs of aging, we combine tretinoin with ingredients like estriol, sodium hyaluronate, niacinamide, and ascorbic acid. Tretinoin promotes collagen production, sodium hyaluronate hydrates, estriol supports elasticity, and niacinamide evens skin tone, while ascorbic acid (Vitamin C) brightens and protects against environmental damage.</li>
      </ul>
      
      <p>Tretinoin is a versatile treatment but requires guidance from a healthcare provider to ensure safe, effective use tailored to your skin type and concerns.</p>
      `
    },

    {
      question: "Any other dermatology conditions that one might benefit from the use of tretinoin?",
      answer: `<p>Yes, besides acne, anti-aging, and dark spots, tretinoin is also used to address several other skin concerns:</p>
      
      <ul>
        <li><b>Rough Skin Texture:</b> Tretinoin helps smooth out uneven or rough skin by accelerating cell turnover, which reveals fresher, softer skin beneath the surface.</li>
        <li><b>Melasma:</b> Tretinoin can be effective in treating melasma, a form of hyperpigmentation often triggered by hormonal changes. It works by lightening dark patches and evening out skin tone.</li>
        <li><b>Stretch Marks:</b> Some studies suggest tretinoin may help improve the appearance of newer stretch marks, making them less noticeable over time, although it's not as effective on older, more established marks.</li>
        <li><b>Large Pores:</b> Regular use of tretinoin can help minimize the appearance of enlarged pores by clearing out clogs and reducing oil production, leading to a smoother complexion.</li>
        <li><b>Keratosis Pilaris (KP):</b> Tretinoin may help treat KP, the small, rough bumps that often appear on the arms or thighs, by exfoliating the skin and preventing follicle blockages.</li>
      </ul>
      
      <p>Tretinoin is a versatile treatment but requires guidance from a healthcare provider to ensure safe, effective use tailored to your skin type and concerns.</p>
      `
    },
  ];

  ngOnInit(): void {
    this.currentFAQ = [...this.aboutFAQ];
  }

  switchFAQ(index: number){
    this.currentIndex = index;
    switch(index){
      case 0:
        this.currentFAQ = [...this.aboutFAQ];
        this.titleText = "About Society";
        break;
      case 1:
        this.currentFAQ = [...this.pricingFAQ];
        this.titleText = "Pricing and Services";
        break;
      case 2:
        this.currentFAQ = [...this.ingredientsFAQ];
        this.titleText = "Tretinoin and Ingredients";
        break;
    };
  }

}
