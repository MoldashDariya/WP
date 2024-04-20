import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-sign-up-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sign-up-page.component.html',
  styleUrl: './sign-up-page.component.css'
})
export class SignUpPageComponent {
  username: string | undefined;
  email: string | undefined;
  password: string | undefined;
  signup() {
    console.log("Username:", this.username);
    console.log("Email:", this.email);
    console.log("Password:", this.password);
  }
}
