import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../restaurant.service';

@Component({
  selector: 'app-all-restaurants',
  templateUrl: './all-restaurants.component.html',
  styleUrls: ['./all-restaurants.component.css']
})
export class AllRestaurantsComponent implements OnInit {
  restaurants: any[] = [];
  currentPage: number = 1;
  pageSize: number = 10;
  totalItems: number = 0;
  totalPages: number = 0;

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit(): void {
    this.loadRestaurants();
  }

  loadRestaurants(): void {
    this.restaurantService.getRestaurants(this.currentPage, this.pageSize).subscribe(data => {
      this.restaurants = data.items;
      this.totalItems = data.totalItems;
      this.totalPages = Math.ceil(this.totalItems / this.pageSize);
    });
  }

  goToPage(page: number): void {
    this.currentPage = page;
    this.loadRestaurants();
  }
}
