import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CustomizationOption } from '../models/customization-option';

@Injectable({
  providedIn: 'root'
})
export class CustomizationService {
  constructor() {}

  getCustomizationOptions(): Observable<CustomizationOption[]> {
    // Mock data for example
    return of([
      { id: 1, name: 'Color', choices: ['Red', 'Blue', 'Green'] },
      { id: 2, name: 'Wheels', choices: ['18 inch', '20 inch'] }
    ]);
  }
}
