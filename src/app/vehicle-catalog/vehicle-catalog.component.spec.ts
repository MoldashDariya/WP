import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { VehicleCatalogComponent } from './vehicle-catalog.component';

describe('VehicleCatalogComponent', () => {
  let component: VehicleCatalogComponent;
  let fixture: ComponentFixture<VehicleCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VehicleCatalogComponent],
      imports: [RouterModule.forRoot([]), FormsModule, CommonModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
