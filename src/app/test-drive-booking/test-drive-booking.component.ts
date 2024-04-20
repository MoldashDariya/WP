import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import {TopBarComponent} from "../top-bar/top-bar.component";

interface TestDriveBooking {
  vehicleModel: string;
  date: string;
  time: string;
  customerName: string;
  contactInfo: string;
}

@Component({
  selector: 'app-test-drive-booking',
  standalone: true,
    imports: [RouterModule, FormsModule, CommonModule, TopBarComponent],
  templateUrl: './test-drive-booking.component.html',
  styleUrls: ['./test-drive-booking.component.css']
})
export class TestDriveBookingComponent implements OnInit {
  bookingDetails: TestDriveBooking = {
    vehicleModel: '',
    date: '',
    time: '',
    customerName: '',
    contactInfo: ''
  };

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  submitBooking(): void {
    console.log('Booking submitted:', this.bookingDetails);
    this.router.navigate(['/booking-confirmation']);
  }

  onCancel(): void {
    this.router.navigate(['/']);
  }
}
