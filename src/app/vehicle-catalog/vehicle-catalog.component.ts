import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { VehicleService } from '../services/vehicle-type.service';
import { Vehicle } from '../vehicle'
@Component({
  selector: 'app-vehicle-catalog',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './vehicle-catalog.component.html',
  styleUrls: ['./vehicle-catalog.component.css']
})
export class VehicleCatalogComponent implements OnInit {
  vehicles: any[] = [];

  constructor(private vehicleService: VehicleService) {}

  ngOnInit(): void {
    this.loadVehicles();
  }

  loadVehicles(): void {
    this.vehicleService.getAllVehicles().subscribe({
      next: (data: Vehicle[]) => {
        this.vehicles = data;
      },
      error: (err: Error) => {
        console.error('Failed to load vehicles:', err);
      }
    });
  }
}
