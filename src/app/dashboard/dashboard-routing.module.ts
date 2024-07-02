import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AllRestaurantsComponent } from './all-restaurants/all-restaurants.component';
import { MyBookingsComponent } from './my-bookings/my-bookings.component';
import { DashboardContainerComponent } from './dashboard-container/dashboard-container.component';

const routes: Routes = [
  {
    path: '', component: DashboardContainerComponent, children: [
      { path: 'all-restaurants', component: AllRestaurantsComponent },
      { path: 'my-bookings', component: MyBookingsComponent },
      { path: '', redirectTo: 'all-restaurants', pathMatch: 'full' }
    ]
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
