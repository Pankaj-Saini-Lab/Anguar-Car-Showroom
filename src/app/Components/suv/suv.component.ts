import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AllService } from '../../Services/all.service';

@Component({
  selector: 'app-suv',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './suv.component.html',
  styleUrl: './suv.component.css'
})
export class SuvComponent {

   // getting cars form allservice

   products : any[] = [];

   constructor(private allservice : AllService) {
     this.products = this.allservice.getAllCars();
   }

   get filteredproducts(){
    return this.products.filter(product => 
      product.id === 's');
   }





}
