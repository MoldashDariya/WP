import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CustomizationService } from '../services/customization.service';
import {TopBarComponent} from "../top-bar/top-bar.component";

@Component({
  selector: 'app-vehicle-customization',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule, TopBarComponent],
  templateUrl: './vehicle-customization.component.html',
  styleUrls: ['./vehicle-customization.component.css']
})
export class VehicleCustomizationComponent implements OnInit {
  options: any[] = [];

  constructor(private customizationService: CustomizationService) {}

  ngOnInit(): void {
    this.loadOptions();
  }

  loadOptions(): void {
    this.customizationService.getCustomizationOptions().subscribe({
      next: (data) => {
        this.options = data;
      },
      error: (err) => {
        console.error('Failed to load customization options:', err);
      }
    });
  }
}
