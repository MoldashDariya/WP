import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-sign-up-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sign-up-page.component.html',
  styleUrl: './sign-up-page.component.css'
})
export class SignUpPageComponent {


  // username: string | undefined;
  // email: string | undefined;
  // password: string | undefined;

  // constructor(private router: Router) {}

  // signup() {
  //     // Here you can implement your sign-up logic
  //     // For simplicity, let's assume a successful sign-up navigates to the login page
  //     this.router.navigate(['/login']); // Update '/login' with your login route
  // }

  username: string | undefined;
  email: string | undefined;
  password: string | undefined;

  signup() {
    



    
    console.log("Username:", this.username);
    console.log("Email:", this.email);
    console.log("Password:", this.password);
  }
}
