import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AirlineService } from '../../airline/airline.service';
import { AirlineDetail } from '../../airline/airline.model';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {
  airline?: AirlineDetail;

  constructor(
    private airlineService: AirlineService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.airlineService.getAirlineById(id).subscribe((data: AirlineDetail | undefined) => {
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
}