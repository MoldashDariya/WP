import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { VehicleService } from '../services/vehicle.service';
import { Vehicle} from "../vehicle";
import {TopBarComponent} from "../top-bar/top-bar.component";

@Component({
  selector: 'app-vehicle-detail',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule, TopBarComponent],
  templateUrl: './vehicle-detail.component.html',
  styleUrls: ['./vehicle-detail.component.css']
})
export class VehicleDetailComponent implements OnInit {
  vehicle!: Vehicle;

  constructor(private vehicleService: VehicleService, private route: ActivatedRoute) {}

  ngOnInit(): void {
  console.log("Component initialized");
  this.loadVehicleDetails();
}

  loadVehicleDetails(): void {
  const id = +this.route.snapshot.params['id'];
  console.log("Vehicle ID requested:", id);
  this.vehicleService.getVehicleById(id).subscribe({
    next: (data) => {
      this.vehicle = data;
      console.log("Vehicle data loaded:", this.vehicle);
    },
    error: (err) => {
      console.error('Error fetching vehicle details:', err);
    }
  });
}


}
