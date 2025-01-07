import { Component } from '@angular/core';
import { AllService } from '../../Services/all.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ev',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ev.component.html',
  styleUrl: './ev.component.css'
})
export class EvComponent {

  // getting cars form allservice

  products : any[] = [];

  constructor(private allservice : AllService) {
    this.products = this.allservice.getAllCars();
  }

  get filteredproducts(){
   return this.products.filter(product => 
     product.id === 'e');
  }

}
