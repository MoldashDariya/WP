import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TestDrive } from './test-drive';

@Injectable({
  providedIn: 'root'
})
export class TestDriveService {
  private testDrives: TestDrive[] = [];  // Initial empty array to store test drives

  constructor() { }

  // Create a test drive booking
  createTestDrive(testDrive: TestDrive): Observable<TestDrive> {
    this.testDrives.push(testDrive);
    return of(testDrive);
  }

  // Get all test drives
  getAllTestDrives(): Observable<TestDrive[]> {
    return of(this.testDrives);
  }

  // Get test drives by vehicle ID
  getTestDrivesByVehicle(vehicleId: number): Observable<TestDrive[]> {
    const filteredTestDrives = this.testDrives.filter(td => td.vehicleId === vehicleId);
    return of(filteredTestDrives);
  }
}
