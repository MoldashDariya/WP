// src/app/services/vehicle.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Vehicle } from '../models/vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor() { }

  getVehicleById(id: number): Observable<Vehicle> {
    const exampleVehicle: Vehicle = {
      id: id,
      make: 'Toyota',
      model: 'Corolla',
      year: 2021,
      price: 20000,
      description: 'A reliable car with excellent mileage.',
      imageUrl: 'url_to_image'
    };
    return of(exampleVehicle);
  }
}
