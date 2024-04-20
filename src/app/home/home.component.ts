import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

import { VehicleCatalogComponent } from "../vehicle-catalog/vehicle-catalog.component";
import { TopBarComponent } from "../top-bar/top-bar.component";
import { CarouselComponent } from "../carousel/carousel.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    imports: [RouterModule, CommonModule, FormsModule, VehicleCatalogComponent, TopBarComponent, CarouselComponent]
})
export class HomeComponent implements OnInit {
    searchQuery: string | undefined;

    constructor(private router: Router) { }

    ngOnInit(): void {
    }

}
