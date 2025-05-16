import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AirlineListComponent } from './airline/airline-list/airline-list.component';
import { AirlineDetailComponent } from './airline/airline-detail/airline-detail.component';
import { FlightListComponent } from './flight/flight-list/flight-list.component';


const routes: Routes = [
  { path: '', component: AirlineListComponent },
  { path: 'airline/:id', component: AirlineDetailComponent },
  { path: 'flights/:id', component: FlightListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }