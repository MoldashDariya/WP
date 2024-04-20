import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {sedans, Vehicle, vehicles,suvs,hatchbacks} from '../vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  constructor() {}

  getAllVehicles(): Observable<Vehicle[]> {
    const allVehicles = [...vehicles, ...suvs, ...sedans, ...hatchbacks];
    return of(allVehicles);
  }
}
