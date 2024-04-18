import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { VehicleCustomizationComponent } from './vehicle-customization.component';

describe('VehicleCustomizationComponent', () => {
  let component: VehicleCustomizationComponent;
  let fixture: ComponentFixture<VehicleCustomizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VehicleCustomizationComponent],
      imports: [
        CommonModule,
        FormsModule,
        RouterModule.forRoot([])
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleCustomizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
