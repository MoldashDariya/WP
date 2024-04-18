export interface TestDrive {
    id: number;
    vehicleId: number;
    customerName: string;
    date: string;  // ISO format date string
    timeSlot: string;  // E.g., "10:00 AM - 11:00 AM"
}
