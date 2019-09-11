import { Component, OnInit } from '@angular/core';
import { HotelList } from '../../interfaces/interface';
import { HotelsService } from '../hotels.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  // @Input()
  public hotels: HotelList[];

  // @Input()
  public selectedHotel: HotelList;
  //
  // @Output()
  // public updateHotel: EventEmitter<number> = new EventEmitter();
  public searchHotel: string = '';

  public constructor (private service: HotelsService) {
  }

  //
  // selectHotel(id: number) {
  //   this.selectedHotel.id !== id ? this.updateHotel.emit(id) : false;
  // }

  ngOnInit(): void {
    this.hotels = this.service.hotels;
    this.selectedHotel = this.service.selectedHotel;
  }
}
