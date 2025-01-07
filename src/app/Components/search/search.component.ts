import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  data : any [] = [];

  constructor(private http : HttpClient){
    this.gettingData();
  }

  gettingData(){
    this.http.get('assets/allCars/cars.json').subscribe((result : any)=>{
      this.data = result;
    })
  }
}
