import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { VehicleService } from '../services/vehicle.service';

@Component({
  selector: 'app-vehicle-detail',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './vehicle-detail.component.html',
  styleUrls: ['./vehicle-detail.component.css']
})
export class VehicleDetailComponent implements OnInit {
  vehicle: any; // Ideally, define a Vehicle interface or class

  constructor(private vehicleService: VehicleService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.loadVehicleDetails();
  }

  loadVehicleDetails(): void {
    const id = this.route.snapshot.params['id']; // Assuming route like '/vehicles/:id'
    this.vehicleService.getVehicleById(id).subscribe({
      next: (data) => {
        this.vehicle = data;
      },
      error: (err) => {
        console.error('Error fetching vehicle details:', err);
      }
    });
  }
}
