import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AirlineService } from '../airline.service';
import { Airline } from '../airline.model';

@Component({
  selector: 'app-airline-detail',
  templateUrl: './airline-detail.component.html',
  styleUrls: ['./airline-detail.component.css']
})
export class AirlineDetailComponent implements OnInit {
  airline?: Airline;

  constructor(
    private airlineService: AirlineService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.airlineService.getAirlineById(id).subscribe(data => {
        if (data) {
          this.airline = data;
        } else {
          this.router.navigate(['/']);
        }
      });
    } else {
      this.router.navigate(['/']);
    }
  }

  verVuelos(): void {
    if (this.airline) {
      this.router.navigate(['/flights', this.airline.id]);
    }
  }
}