import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AirlineListComponent } from './airline-list/airline-list.component';
import { AirlineDetailComponent } from './airline-detail/airline-detail.component';



@NgModule({
  declarations: [
    AirlineListComponent,
    AirlineDetailComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AirlineModule { }
