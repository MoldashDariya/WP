import { Injectable } from '@angular/core';
import { Vehicle, vehicles, suvs, sedans, hatchbacks } from './vehicle';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor() { }

  // Get all vehicles
  getAllVehicles(): Vehicle[] {
    return vehicles;
  }

  // Get vehicles by categories
  getSuvs(): Vehicle[] {
    return suvs;
  }

  getSedans(): Vehicle[] {
    return sedans;
  }

  getHatchbacks(): Vehicle[] {
    return hatchbacks;
  }

  // Search vehicles by model name
  searchVehiclesByModel(model: string): Observable<Vehicle[]> {
    const filteredVehicles = vehicles.filter(vehicle => vehicle.model.toLowerCase().includes(model.toLowerCase()));
    return of(filteredVehicles);
  }
}
