import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private apiUrl = 'https://your-backend-api.com/bookings';

  constructor() { }

  // getBookings(page: number, pageSize: number): Observable<any> {
  //   return this.http.get<any>(`${this.apiUrl}?page=${page}&pageSize=${pageSize}`);
  // }
  getBookings(page: number, pageSize: number): Observable<any> {
    const fakeData = this.generateFakeBookings(page, pageSize);
    const totalItems = 50; // Total number of items for pagination
    return of({ items: fakeData, totalItems });
  }

  private generateFakeBookings(page: number, pageSize: number): any[] {
    const bookings = [];
    const startIndex = (page - 1) * pageSize;
    for (let i = 0; i < pageSize; i++) {
      const bookingIndex = startIndex + i + 1;
      bookings.push({
        restaurantName: `Restaurant ${bookingIndex}`,
        date: new Date().toISOString(),
        numberOfPeople: Math.floor(Math.random() * 10) + 1,
        status: ['Confirmed', 'Pending', 'Cancelled'][Math.floor(Math.random() * 3)],
        timeSlot: `${Math.floor(Math.random() * 12) + 1}:00 ${['AM', 'PM'][Math.floor(Math.random() * 2)]}`,
        daysRemaining: Math.floor(Math.random() * 30) + 1
      });
    }
    return bookings;
  }
}
