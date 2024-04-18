import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Assume a service exists that provides available customization options
import { CustomizationService } from '../services/customization.service';

@Component({
  selector: 'app-vehicle-customization',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './vehicle-customization.component.html',
  styleUrls: ['./vehicle-customization.component.css']
})
export class VehicleCustomizationComponent implements OnInit {
  options: any[] = [];  // Define the type based on your data model

  constructor(private customizationService: CustomizationService) {}

  ngOnInit(): void {
    this.loadOptions();
  }

  loadOptions(): void {
    // This method would call the customizationService to fetch customization options
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
