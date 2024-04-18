import { TestBed } from '@angular/core/testing';
import { TestDriveService } from './test-drive.service';
import { TestDrive } from './test-drive';

describe('TestDriveService', () => {
  let service: TestDriveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestDriveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create and retrieve test drive bookings', () => {
    const testDrive: TestDrive = {
      id: 1,
      vehicleId: 101,
      customerName: 'John Doe',
      date: '2024-04-15',
      timeSlot: '2:00 PM - 3:00 PM'
    };
    service.createTestDrive(testDrive).subscribe(created => {
      expect(created).toEqual(testDrive);
    });

    service.getAllTestDrives().subscribe(testDrives => {
      expect(testDrives.length).toBeGreaterThan(0);
      expect(testDrives.find(td => td.id === testDrive.id)).toBeTruthy();
    });
  });

  it('should filter test drives by vehicle', () => {
    const vehicleId = 101;
    service.getTestDrivesByVehicle(vehicleId).subscribe(testDrives => {
      expect(testDrives.every(td => td.vehicleId === vehicleId)).toBeTruthy();
    });
  });
});
