import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TestDrive } from './test-drive';

@Injectable({
  providedIn: 'root'
})
export class TestDriveService {
  private testDrives: TestDrive[] = [];

  constructor() { }

  createTestDrive(testDrive: TestDrive): Observable<TestDrive> {
    this.testDrives.push(testDrive);
    return of(testDrive);
  }

  getAllTestDrives(): Observable<TestDrive[]> {
    return of(this.testDrives);
  }

  getTestDrivesByVehicle(vehicleId: number): Observable<TestDrive[]> {
    const filteredTestDrives = this.testDrives.filter(td => td.vehicleId === vehicleId);
    return of(filteredTestDrives);
  }
}
