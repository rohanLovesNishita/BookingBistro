import { Component, Input, OnInit } from '@angular/core';
import { BookingService } from '../../booking.service';

@Component({
  selector: 'app-booking-card',
  templateUrl: './booking-card.component.html',
  styleUrls: ['./booking-card.component.css']
})
export class BookingCardComponent implements OnInit {
  @Input() booking: any;

  daysRemaining: number;

  constructor(private bookingService: BookingService) { }

  ngOnInit(): void {
    const currentDate = new Date();
    const bookingDate = new Date(this.booking.date);
    const diffTime = Math.abs(bookingDate.getTime() - currentDate.getTime());
    this.daysRemaining = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }
}
