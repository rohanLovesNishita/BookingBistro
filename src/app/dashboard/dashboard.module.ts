import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyBookingsComponent } from './my-bookings/my-bookings.component';
import { AllRestaurantsComponent } from './all-restaurants/all-restaurants.component';
import { DashboardContainerComponent } from './dashboard-container/dashboard-container.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { BookingCardComponent } from './booking-card/booking-card.component';
import { PaginationComponent } from '../pagination/pagination.component';
import { RestaurantCardComponent } from './restaurant-card/restaurant-card.component';




@NgModule({
  declarations: [
    MyBookingsComponent,
    AllRestaurantsComponent,
    DashboardContainerComponent,
    BookingCardComponent,PaginationComponent, RestaurantCardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
