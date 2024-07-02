import { Component, OnInit } from '@angular/core';
import { BookingService } from '../../booking.service';


@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.css']
})
export class MyBookingsComponent implements OnInit {
  bookings: any[] = [];
  currentPage: number = 1;
  pageSize: number = 10;
  totalItems: number;
  totalPages: number;

  constructor(private bookingService: BookingService) { }

  ngOnInit(): void {
    this.loadBookings();
  }

  loadBookings(): void {
    this.bookingService.getBookings(this.currentPage, this.pageSize).subscribe(data => {
      this.bookings = data.items;
      this.totalItems = data.totalItems;
      this.totalPages = Math.ceil(this.totalItems / this.pageSize);
    });
  }

  goToPage(page: number): void {
    this.currentPage = page;
    this.loadBookings();
  }
}

