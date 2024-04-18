import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { VehicleService } from '../../vehicle.service';
import { Vehicle } from '../../vehicle';
import { TopBarComponent } from "../../top-bar/top-bar.component";

@Component({
  selector: 'app-hatchback',
  standalone: true,
  templateUrl: './sedan.component.html',
  styleUrls: ['./sedan.component.css'],
  imports: [CommonModule, RouterModule, TopBarComponent]
})
export class SedanComponent implements OnInit {
  sedanVehicles: Vehicle[] = [];

  constructor(private vehicleService: VehicleService) { }

  ngOnInit(): void {
    this.sedanVehicles = this.vehicleService.getSedans(); // Method to fetch sedan vehicles
  }

}
