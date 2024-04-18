import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestDriveBookingComponent } from './test-drive-booking.component';

describe('TestDriveBookingComponent', () => {  // Changed the name from 'GenresComponent'
  let component: TestDriveBookingComponent;
  let fixture: ComponentFixture<TestDriveBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestDriveBookingComponent]  // Corrected setup: Use 'declarations' instead of 'imports'
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestDriveBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
