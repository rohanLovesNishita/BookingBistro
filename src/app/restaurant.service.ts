import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  private apiUrl = 'https://your-backend-api.com/restaurants';

  constructor() { }

  // Comment out the real API call for now and use fake data
  // getRestaurants(page: number, pageSize: number): Observable<any> {
  //   return this.http.get<any>(`${this.apiUrl}?page=${page}&pageSize=${pageSize}`);
  // }

  // Add method to return fake data
  getRestaurants(page: number, pageSize: number): Observable<any> {
    const fakeData = this.generateFakeRestaurants(page, pageSize);
    const totalItems = 50; // Total number of items for pagination
    return of({ items: fakeData, totalItems });
  }

  private generateFakeRestaurants(page: number, pageSize: number): any[] {
    const restaurants = [];
    const startIndex = (page - 1) * pageSize;
    for (let i = 0; i < pageSize; i++) {
      const restaurantIndex = startIndex + i + 1;
      restaurants.push({
        name: `Restaurant ${restaurantIndex}`,
        registeredDate: new Date().toISOString(),
        cuisines: ['Italian', 'Chinese', 'Indian'][Math.floor(Math.random() * 3)],
        location: `Location ${restaurantIndex}`,
        numberOfBookings: Math.floor(Math.random() * 100)
      });
    }
    return restaurants;
  }
}
