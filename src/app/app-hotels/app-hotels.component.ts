import { Component, OnInit } from '@angular/core';
import {HotelList} from '../interfaces/interface';

@Component({
  selector: 'app-app-hotels',
  templateUrl: './app-hotels.component.html',
  styleUrls: ['./app-hotels.component.css']
})
export class AppHotelsComponent implements OnInit {

  constructor() {
    this.selectedHotel = this.hotels[0];
  }

  public selectedHotel: HotelList;

  public hotels: HotelList[] = [
    {
      id: 0,
      title: 'Universal Cabana',
      address: 'Orlando',
      description: 'Best one!',
      phone: '+3242353434',
      picture: '../assets/images/1.jpg',
      photos: [
        '../assets/images/res.jpg',
        '../assets/images/r1.jpg'
      ],
      weather:  {
        temperature: 12,
        wind: 11,
        icon: 'sun'
      },
      profile: {
        followers: 112,
        following: 11,
        photo: '../assets/images/1.jpg'
      },
      stars: 3
    },
    {
      id: 1,
      title: 'Kharkov plaza',
      address: 'Kharkov',
      description: 'Five Stars',
      phone: '+3242353434',
      picture: '../assets/images/2.jpg',
      photos: [
        '../assets/images/res.jpg',
        '../assets/images/r1.jpg'
      ],
      weather:  {
        temperature: 5,
        wind: 4,
        icon: 'rain'
      },
      profile: {
        followers: 12,
        following: 111,
        photo: '../assets/images/1.jpg'
      },
      stars: 4
    },
    {
      id: 2,
      title: 'Hotel Grand',
      address: 'Orlando',
      description: 'Superior',
      phone: '+3242353434',
      picture: '../assets/images/1.jpg',
      photos: [
        '../assets/images/res.jpg',
        '../assets/images/r1.jpg'
      ],
      weather:  {
        temperature: -2,
        wind: 2,
        icon: 'cloud'
      },
      profile: {
        followers: 45,
        following: 78,
        photo: '../assets/images/1.jpg'
      },
      stars: 5
    }
  ];

  public selectHotel(id: number): void {
    this.selectedHotel = this.getHotelById(id);
  }

  private getHotelById(id: number): HotelList {
    return this.hotels.filter((item: HotelList) => {
      return item.id === id;
    }).shift();
  }

  ngOnInit() {
  }

}

