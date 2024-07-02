import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyBookingsComponent } from './my-bookings/my-bookings.component';
import { AllRestaurantsComponent } from './all-restaurants/all-restaurants.component';



@NgModule({
  declarations: [
    MyBookingsComponent,
    AllRestaurantsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
