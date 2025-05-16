import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Airline, AirlineDetail } from './airline.model';

@Injectable({
  providedIn: 'root',
})
export class AirlineService {
  private url =
    'https://raw.githubusercontent.com/NoNameLab/ISIS2603_Parcial2_S6_202510/refs/heads/main/flights.json';

  constructor(private http: HttpClient) {}

  getAirlines(): Observable<Airline[]> {
    return this.http.get<Airline[]>(this.url);
  }

  getAirlineById(id: string): Observable<AirlineDetail | undefined> {
    return new Observable((observer) => {
      this.getAirlines().subscribe({
        next: (airlines) => {
          const airline = airlines.find((a) => a.id === id);
          if (airline) {
            // Asignar flights si no existe para cumplir con AirlineDetail
            if (!('flights' in airline)) {
              (airline as AirlineDetail).flights = [];
            }
            observer.next(airline as AirlineDetail);
          } else {
            observer.next(undefined);
          }
          observer.complete();
        },
        error: (err) => observer.error(err),
      });
    });
  }
}