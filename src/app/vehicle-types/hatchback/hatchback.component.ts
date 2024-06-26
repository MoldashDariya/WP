import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { VehicleService } from '../../vehicle.service';
import { Vehicle } from '../../vehicle';
import { TopBarComponent } from "../../top-bar/top-bar.component";

@Component({
  selector: 'app-hatchback',
  standalone: true,
  templateUrl: './hatchback.component.html',
  styleUrls: ['./hatchback.component.css'],
  imports: [CommonModule, RouterModule, TopBarComponent]
})
export class HatchbackComponent implements OnInit {
  hatchbackVehicles: Vehicle[] = [];

  constructor(private vehicleService: VehicleService) { }

  ngOnInit(): void {
    this.hatchbackVehicles = this.vehicleService.getHatchbacks();
  }

}
