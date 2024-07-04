import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-table-booking',
  templateUrl: './table-booking.component.html',
  styleUrls: ['./table-booking.component.css']
})
export class TableBookingComponent implements OnInit {
  restaurantId: string|null='';
  bookingForm: FormGroup;
  minDate: Date;
  maxDate: Date;
  timeSlots: { startTime: string, endTime: string, maxPeople: number }[] = [];
  today: Date = new Date();

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.minDate = this.today;
    this.maxDate = new Date(this.today.getFullYear(), this.today.getMonth() + 2, this.today.getDate());
  }

  ngOnInit(): void {
    this.restaurantId = this.route.snapshot.paramMap.get('restaurantId');
    // Simulate fetching data based on restaurantId (replace with actual API call)
    this.fetchRestaurantData(this.restaurantId?this.restaurantId:'');

    // Initialize booking form with default values and validators
    this.bookingForm = this.fb.group({
      date: [null, [Validators.required]],
      timeSlot: [null, [Validators.required]],
      numberOfPeople: [2, [Validators.required, Validators.min(2), Validators.max(20)]]
    });
  }

  fetchRestaurantData(restaurantId: string): void {
    // Simulate fetching data based on restaurantId (replace with actual API call)
    // For demo purposes, we'll simulate time slots
    this.timeSlots = [
      { startTime: '12:00 PM', endTime: '02:00 PM', maxPeople: 4 },
      { startTime: '05:00 PM', endTime: '07:00 PM', maxPeople: 6 }
      // Add more time slots as needed based on fetched data
    ];
  }

  onSubmit(): void {
    if (this.bookingForm.valid) {
      // Handle booking submission here, possibly make API call to backend
      const formData = this.bookingForm.value;
      console.log('Booking submitted:', formData);
      // Reset form after successful booking
      this.bookingForm.reset({ numberOfPeople: 2 });
    } else {
      // Mark form fields as touched to display validation errors
      this.bookingForm.markAllAsTouched();
    }
  }

  getTimeSlotsForDate(date: Date): { startTime: string, endTime: string, maxPeople: number }[] {
    // Logic to filter time slots based on date, working hours, and intervals
    // Here you would implement the logic based on fetched data (not shown in this example)
    return this.timeSlots.filter(slot => {
      // Example logic: Filter by working hours and intervals
      // Implement your own logic based on fetched data
      return true; // Placeholder logic, replace with actual implementation
    });
  }

  isDateSelectable(date: Date): boolean {
    // Logic to determine if the date is selectable (within 2 months and valid working day)
    const twoMonthsFromNow = new Date(this.today.getFullYear(), this.today.getMonth() + 2, this.today.getDate());
    return date >= this.today && date <= twoMonthsFromNow;
  }

  isTimeSlotSelectable(slot: { startTime: string, endTime: string, maxPeople: number }): boolean {
    // Logic to determine if the time slot is selectable based on current time and slot conditions
    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const currentDate = new Date().toLocaleDateString();
    const slotStartTime = slot.startTime;
    return (currentDate === this.bookingForm.value.date.toLocaleDateString()) && (currentTime < slotStartTime);
  }
}
