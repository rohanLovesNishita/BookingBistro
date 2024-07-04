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

  // getRestaurantData(restaurantId: string): Observable<any> {
  //   // Replace with actual API endpoint in real application
  //   return this.http.get<any>(`/api/restaurants/${restaurantId}`);
  // }

  // Mock method to generate fake restaurant data
  getFakeRestaurantData(): Observable<any[]> {
    // Mock data generation
    const restaurants: any[] = [];
    const numberOfRestaurants = 5; // Adjust the number of fake restaurants as needed

    for (let i = 1; i <= numberOfRestaurants; i++) {
      const restaurant = {
        id: `rest-${i}`,
        name: `Restaurant ${i}`,
        workingDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        workingHours: '10:00 AM - 8:00 PM',
        timeSlotInterval: '1 hour',
        maxPeoplePerSlot: Math.floor(Math.random() * 10) + 5 // Random number between 5 and 14
      };
      restaurants.push(restaurant);
    }

    return of(restaurants); // Simulate Observable from HTTP call
  }
}
