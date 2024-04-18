import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { VehicleService } from '../vehicle.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [RouterModule,FormsModule,CommonModule],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css'
})
export class TopBarComponent implements OnInit{

  books: any[] | undefined;
  searchTerm: string | undefined;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }






}
