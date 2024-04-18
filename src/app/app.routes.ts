import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { VehicleCatalogComponent } from './vehicle-catalog/vehicle-catalog.component';
import { VehicleDetailComponent } from './vehicle-detail/vehicle-detail.component';
import { TestDriveBookingComponent } from './test-drive-booking/test-drive-booking.component';
import { VehicleCustomizationComponent } from './vehicle-customization/vehicle-customization.component';
import { InfoPageComponent } from './info-page/info-page.component';
import { LogInPageComponent } from './log-in-page/log-in-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { HatchbackComponent } from './vehicle-types/hatchback/hatchback.component';
import { SuvComponent } from './vehicle-types/suv/suv.component';
import { SedanComponent } from './vehicle-types/sedan/sedan.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, title: 'Welcome to Vehicle Dealership' },
    { path: 'catalog', component: VehicleCatalogComponent, title: 'Vehicle Catalog' },
    { path: 'catalog/hatchback', component: HatchbackComponent, title: 'Hatchback Vehicles' },
    { path: 'catalog/suv', component: SuvComponent, title: 'SUV Vehicles' },
    { path: 'catalog/sedan', component: SedanComponent, title: 'Sedan Vehicles' },
    { path: 'details/:id', component: VehicleDetailComponent, title: 'Vehicle Details' },
    { path: 'test-drive', component: TestDriveBookingComponent, title: 'Book a Test Drive' },
    { path: 'customize', component: VehicleCustomizationComponent, title: 'Customize Your Vehicle' },
    { path: 'info', component: InfoPageComponent, title: 'Dealership Information' },
    { path: 'login', component: LogInPageComponent, title: 'Log In' },
    { path: 'signup', component: SignUpPageComponent, title: 'Sign Up' },
];
