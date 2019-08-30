import {Component, Input, OnInit} from '@angular/core';
import {HotelList} from '../../interfaces/interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @Input()
  public selectedHotel: HotelList;

  constructor() { }

  ngOnInit() {
  }

}
