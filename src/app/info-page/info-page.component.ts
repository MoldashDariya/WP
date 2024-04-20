import { Component } from '@angular/core';
import {TopBarComponent} from "../top-bar/top-bar.component";

@Component({
  selector: 'app-info-page',
  standalone: true,
  imports: [
    TopBarComponent
  ],
  templateUrl: './info-page.component.html',
  styleUrl: './info-page.component.css'
})
export class InfoPageComponent {

}
