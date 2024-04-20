import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestDriveBookingComponent } from './test-drive-booking.component';

describe('TestDriveBookingComponent', () => {
  let component: TestDriveBookingComponent;
  let fixture: ComponentFixture<TestDriveBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestDriveBookingComponent]
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
