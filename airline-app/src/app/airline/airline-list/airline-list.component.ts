import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AirlineService } from '../airline.service';
import { Airline } from '../airline.model';

@Component({
  selector: 'app-airline-list',
  templateUrl: './airline-list.component.html',
  styleUrls: ['./airline-list.component.css']
})
export class AirlineListComponent implements OnInit {
  airlines: Airline[] = [];

  constructor(
    private airlineService: AirlineService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.airlineService.getAirlines().subscribe((data) => {
      this.airlines = data;
    });
  }

  selectAirline(airline: Airline): void {
    this.router.navigate(['/airline', airline.id]);
  }
}