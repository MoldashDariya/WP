import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CustomizationOption } from '../models/customization-option';

@Injectable({
  providedIn: 'root'
})
export class CustomizationService {
  constructor() {}

  getCustomizationOptions(): Observable<CustomizationOption[]> {
    const options: CustomizationOption[] = [
      {
        id: 1,
        name: 'Color',
        choices: ['Red', 'Blue', 'Green'],
        imageUrl: '../../assets/4p.webp'
      },
      {
        id: 2,
        name: 'Wheels',
        choices: ['18 inch', '20 inch'],
        imageUrl: '../../assets/5p.jpg'
      }
    ];
    return of(options);
  }
}
