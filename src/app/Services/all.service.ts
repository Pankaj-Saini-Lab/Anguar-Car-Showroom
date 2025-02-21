import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AllService {

  constructor() { }

  cars = [
    {
      id : 's',
      name: 'Mahindra Scorpio',
      imageUrl: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/Scorpio/10764/1708522826716/front-left-side-47.jpg?impolicy=resize&imwidth=360',
      reviews: '★★★★☆ (4)',
      price: '₹13.62 - ₹17.42 lakh',
    },
    {
      id : 's',
      name: 'Maruti Fronx',
      imageUrl: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/FRONX/9243/1697697928533/front-left-side-47.jpg?impolicy=resize&imwidth=360',
      reviews: '★★★★☆ (4.5)',
      price: '₹7.51 - ₹14.59 lakh*',
    },
    {
      id : 's',
      name: 'Tata Curvv',
      imageUrl: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Curvv/9578/1723033064164/front-left-side-47.jpg?impolicy=resize&imwidth=360',
      reviews: '★★★★☆ (4.5)',
      price: '₹10 - ₹19 lakh*',
    },
    {
      id : 'e',
      name: 'MG ZS EV',
      imageUrl: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/MG/ZS-EV/11503/1719393099348/front-left-side-47.jpg?impolicy=resize&imwidth=360',
      reviews: '★★★★☆ (4.5)',
      price: '₹17.99 - ₹25.49 lakh*'
    },
    {
      id : 's',
      name: 'Mahindra Thar',
      imageUrl: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/Thar/10745/1697697308167/front-left-side-47.jpg?impolicy=resize&imwidth=360',
      reviews: '★★★★☆ (4.5)',
      price: '₹11.35 - ₹17.5 lakh*',
    },
    {
      id : 's',
      name: 'Hyundai Creta',
      imageUrl: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Hyundai/Creta/8667/1705465218824/front-left-side-47.jpg?impolicy=resize&imwidth=360',
      reviews: '★★★★☆ (4.5)',
      price: '₹11 - ₹20.3 lakh*',
    },
    {
      id : 'e',
      name: 'MG Windsor',
      imageUrl: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/MG/Windsor-EV/11848/1726050481737/front-left-side-47.jpg?impolicy=resize&imwidth=360',
      reviews: '★★★★☆ (4.5)',
      price: '₹13.99 - ₹15.49 lakh*'
    },
   
    {
      id : 's',
      name: 'Mahindra XUV700',
      imageUrl: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/XUV700/10789/1705388477954/front-left-side-47.jpg?impolicy=resize&imwidth=360',
      reviews: '★★★★☆ (4.5)',
      price: '₹13.99 - ₹26.04 lakh*',
    },
    {
      id : 'e',
      name: 'Mahindra XUV400',
      imageUrl: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/XUV400-EV/6820/1662704228567/front-left-side-47.jpg?impolicy=resize&imwidth=360',
      reviews: '★★★★☆ (4.5)',
      price: '₹15.99 - ₹19.49 lakh*'
    },
   
    {
      id : 's',
      name: 'Mahindra Thar Roxx',
      imageUrl: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/Thar-ROXX/8438/1723692413550/front-left-side-47.jpg?impolicy=resize&imwidth=360',
      reviews: '★★★★☆ (4.5)',
      price: '₹12.99 - ₹22.49 lakh*',
    },
   
    {
      id : 's',
      name: 'Mahindra XUV-3XO',
      imageUrl: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/XUV-3XO/11683/1714407830967/front-left-side-47.jpg?impolicy=resize&imwidth=360',
      reviews: '★★★★☆ (4.5)',
      price: '₹7.99 - ₹15.49 lakh*',
    },
    {
      id : 'e',
      name: 'Tata Curvv',
      imageUrl: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Curvv-EV/8935/1723089608373/front-left-side-47.jpg?impolicy=resize&imwidth=360',
      reviews: '★★★★☆ (4.5)',
      price: '₹17.99 - ₹25.49 lakh*'
    },
    {
      id : 'e',
      name: 'Tata Nexon EV',
      imageUrl: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Nexon-EV-2023/11024/1694146347051/front-left-side-47.jpg?impolicy=resize&imwidth=360',
      reviews: '★★★★☆ (4.5)',
      price: '₹12.99 - ₹17.49 lakh*'
    },
    {
      id : 's',
      name: 'Tata Nexon',
      imageUrl: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Nexon/11104/1697698470038/front-left-side-47.jpg?impolicy=resize&imwidth=360',
      reviews: '★★★★☆ (4)',
      price: '₹8 - ₹15.5 lakh'
    },
    {
      id : 'e',
      name: 'Tata Punch EV',
      imageUrl: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Punch-EV/9484/1704446706447/front-left-side-47.jpg?impolicy=resize&imwidth=360',
      reviews: '★★★★☆ (4.5)',
      price: '₹9.99 - ₹14.49 lakh*'
    },
    {
      id : 's',
      name: 'Tata Harrier',
      imageUrl: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Harrier/9368/1697532960290/front-left-side-47.jpg?impolicy=resize&imwidth=360',
      reviews: '★★★★☆ (4.5)',
      price: '₹14.99 - ₹25.49 lakh*',
    },
    {
      id : 'e',
      name: 'Kia EV6',
      imageUrl: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Kia/EV6/8947/1654159762071/front-left-side-47.jpg?impolicy=resize&imwidth=360',
      reviews: '★★★★☆ (4.5)',
      price: '₹60.99 - ₹65.49 lakh*'
    },
    {
      id : 's',
      name: 'Maruti Brezza',
      imageUrl: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Brezza/10388/1694424068944/front-left-side-47.jpg?impolicy=resize&imwidth=360',
      reviews: '★★★★☆ (4.5)',
      price: '₹8.34 - ₹14.14 lakh*',
    },
    {
      id : 'e',
      name: 'MG Comet',
      imageUrl: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/MG/Comet-EV/11556/1720151908023/front-left-side-47.jpg?impolicy=resize&imwidth=360',
      reviews: '★★★★☆ (4.5)',
      price: '₹7.99 - ₹9.49 lakh*'
    },
    
    
    {
      id : 'e',
      name: 'PMV EaS E',
      imageUrl: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/PMV/EaS-E/9441/1668513265016/front-left-side-47.jpg?impolicy=resize&imwidth=360',
      reviews: '★★★★☆ (4.5)',
      price: '₹7.99 lakh*'
    },


  ]

  getAllCars(){
    return this.cars;
  }
}
