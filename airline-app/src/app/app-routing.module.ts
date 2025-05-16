import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AirlineListComponent } from './airline/airline-list/airline-list.component';
import { AirlineDetailComponent } from './airline/airline-detail/airline-detail.component';

const routes: Routes = [
  { path: '', component: AirlineListComponent },
  { path: 'airline/:id', component: AirlineDetailComponent },
  {
    path: 'flights/:id',
    loadComponent: () =>
      import('./flight/flight-list/flight-list.component').then(
        (m) => m.FlightListComponent
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}