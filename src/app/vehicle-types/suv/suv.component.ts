import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { VehicleService } from '../../vehicle.service';
import { Vehicle } from '../../vehicle';
import { TopBarComponent } from "../../top-bar/top-bar.component";

@Component({
  selector: 'app-suv',
  standalone: true,
  templateUrl: './suv.component.html',
  styleUrls: ['./suv.component.css'],
  imports: [CommonModule, RouterModule, TopBarComponent]
})
export class SuvComponent implements OnInit {
  suvVehicles: Vehicle[] = [];

  constructor(private vehicleService: VehicleService) { }

  ngOnInit(): void {
    this.suvVehicles = this.vehicleService.getSuvs();
  }

}
