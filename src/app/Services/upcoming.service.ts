import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpcomingService {

  constructor() { }

  cars = [
    {
      name: 'Maruti Dzire',
      imageUrl: 'https://imgd.aeplcdn.com/227x128/n/cw/ec/170173/dzire-2024-exterior-front-view.jpeg?isig=0&q=80',
      price: '₹7.62 - ₹11.4 lakh',
      month: 'November',
      chances : 'High',
      type : 'ICE'
    },
    {
      name: 'Mahindra BE 09',
      imageUrl: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra-BE/09/9265/1660650187434/front-left-side-47.jpg',
      price: '₹45 lakh',
      month: 'November',
      chances : 'High',
      type : 'EV'
    },
    {
      name: 'Skoda Kylaq',
      imageUrl: 'https://imgd.aeplcdn.com/227x128/n/cw/ec/171777/kylaq-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80',
      price: '₹8 - ₹12.42 lakh',
      month: 'March',
      chances : 'Low',
      type : 'ICE'
    },
    {
      name: 'Tata Avinya',
      imageUrl: 'https://imgd.aeplcdn.com/227x128/n/cw/ec/121335/avinya-concept-exterior-left-front-three-quarter.jpeg?isig=0&q=80',
      price: '₹30 - ₹60 lakh',
      month: 'March',
      chances : 'High',
      type : 'EV'
    },
    {
      name: 'Maruti Vitra',
      imageUrl: 'https://imgd.aeplcdn.com/227x128/n/cw/ec/139269/evx-exterior-right-front-three-quarter-11.jpeg?isig=0&q=80',
      price: '₹13.62 - ₹22.05 lakh',
      month: 'January',
      chances : 'Low',
      type : 'ICE'
    },
    {
      name: 'Tata Harrier',
      imageUrl: 'https://imgd.aeplcdn.com/227x128/n/cw/ec/139585/harrier-ev-exterior-left-front-three-quarter.jpeg?isig=0&q=80',
      price: '₹22 - ₹28 lakh',
      month: 'March',
      chances : 'High',
      type : 'EV'
    },
    {
      name: 'Mahindra XUV e8',
      imageUrl: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra-XUV/e8/9266/Mahindra-XUV-e8-/1660650994176/front-left-side-47.jpg',
      price: '₹35 lakh',
      month: 'March',
      chances : 'High',
      type : 'EV'
    },
    {
      name: 'Toyota Camry 2024',
      imageUrl: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Camry-2024/11344/1700034596583/front-left-side-47.jpg',
      price: '₹50 lakh',
      month: 'November',
      chances : 'Low',
      type : 'ICE'
    },
    {
      name: 'OLA Electric Car',
      imageUrl: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/OLA-Electric/Electric-Car/8984/1660632630667/front-left-side-47.jpg',
      price: '₹40 lakh',
      month: 'January',
      chances : 'Low',
      type : 'EV'
    },
    {
      name: 'Skoda Superb 2024',
      imageUrl: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Skoda/Superb-2024/11648/1712204642647/front-left-side-47.jpg',
      price: '₹36 lakh',
      month: 'November',
      chances : 'High',
      type : 'ICE'
    },

  ];

  getallupcoming(){
    return this.cars;
  }

}
