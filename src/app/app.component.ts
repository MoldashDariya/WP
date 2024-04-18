import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'vehicle-dealership';

  images= [
    {
      imageSrc:
      'https://i.pinimg.com/originals/91/bf/bc/91bfbc7da2763a44a4ed0e73ca88748f.jpg',
      imageAlt:
      'img1',
    },

  ]
}
