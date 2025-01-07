import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { YesNoComponent } from '../yes-no/yes-no.component';
import { WishlistService } from '../../Services/wishlist.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AllService } from '../../Services/all.service';


@Component({
  selector: 'app-all',
  standalone: true,
  imports: [YesNoComponent , CommonModule, FormsModule],
  templateUrl: './all.component.html',
  styleUrl: './all.component.css'
})
export class AllComponent {

  // getting cars form allservice

  products : any[] = [];

  constructor(private allservice : AllService) {
    this.products = this.allservice.getAllCars();
  }


  // Adding to wishlist

  wishlist: any[] = [];

  dialog = inject(MatDialog)
  wishlistService = inject(WishlistService)

  towishlist(product : any): void {
    const dialogRef = this.dialog.open(YesNoComponent, {
      width: '400px' ,
      data: product  // Pass the product data to the dialog
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        alert('Car added to wishlist');
        this.wishlistService.addToWishlist(product); // Add the product to the wishlist in the service
      }
    });
  }


  // Searching

  searchData: string = '';

  get filteredproducts(){
    return this.products.filter(product =>
      product.name.toLowerCase().includes(this.searchData.toLowerCase())
    );
  }

  

}
