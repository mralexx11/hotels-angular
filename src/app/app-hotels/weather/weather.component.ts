import {Component, Input, OnInit} from '@angular/core';
import {HotelList} from '../../interfaces/interface';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  @Input()
  public selectedHotel: HotelList;

  constructor() { }

  ngOnInit() {
  }

}
