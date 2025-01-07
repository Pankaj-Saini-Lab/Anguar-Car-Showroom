import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UpcomingService } from '../../Services/upcoming.service';

@Component({
  selector: 'app-upcoming',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './upcoming.component.html',
  styleUrl: './upcoming.component.css'
})
export class UpcomingComponent {

  cars : any[] = [];

  constructor(private upcoming : UpcomingService) {
    this.cars = this.upcoming.getallupcoming();
  }

  selectedMonth: string = '';

  month(x: string): void {
    this.selectedMonth = x;
  }

  get filteredcars() {
    if (!this.selectedMonth) return this.cars;            // Return all cars  untill button is not clicked .
    return this.cars.filter(car => 
    car.month.toLowerCase() === this.selectedMonth.toLowerCase());
  }
}