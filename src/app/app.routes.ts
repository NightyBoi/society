import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { DermatologyComponent } from './dermatology/dermatology.component';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { FaqsComponent } from './faqs/faqs.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { QuizComponent } from './quiz/quiz.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' }, // Default route
    { path: 'services', component: ServicesComponent }, // Services Page
    { path: 'services/dermatology', component: DermatologyComponent }, // Dermatology Page
    { path: 'products', component: ProductsComponent }, // Products
    { path: 'about', component: AboutComponent }, // About
    { path: 'faq', component: FaqsComponent }, // FAQs
    { path: 'login', component: LoginComponent }, // Login
    { path: 'signup', component: SignupComponent }, // Sign Up
    { path: 'quiz', component: QuizComponent } // Quiz
];
