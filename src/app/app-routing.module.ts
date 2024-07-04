import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableBookingComponent } from './booking/table-booking/table-booking.component';

const routes: Routes = [
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'booking/:id', component: TableBookingComponent }
  // Add more routes as needed
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
