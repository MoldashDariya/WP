import { Injectable } from '@angular/core';
import { Vehicle, vehicles, suvs, sedans, hatchbacks } from './vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor() { }

  getAllVehicles(): Vehicle[] {
    return vehicles;
  }

  getSuvs(): Vehicle[] {
    return suvs;
  }

  getSedans(): Vehicle[] {
    return sedans;
  }

  getHatchbacks(): Vehicle[] {
    return hatchbacks;
  }
}
