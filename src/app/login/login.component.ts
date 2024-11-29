import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  submitLogin(form: NgForm){
    if(form.valid){
      console.log(form);
    }
  }
}
