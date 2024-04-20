import { Injectable } from '@angular/core';
import { Observable, of, throwError} from 'rxjs';
import { Vehicle, vehicles, suvs, sedans, hatchbacks } from '../vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor() { }

  getVehicleById(id: number): Observable<Vehicle> {
  const allVehicles = [...vehicles, ...suvs, ...sedans, ...hatchbacks];
  console.log(allVehicles.map(v => v.id));
  const vehicle = allVehicles.find(v => v.id === id);

  if (vehicle) {
    return of(vehicle);
  } else {
    throw new Error(`Vehicle with ID ${id} not found`);
  }
}


}
