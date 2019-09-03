import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {HotelList} from '../../interfaces/interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public hotels: HotelList[];

  @Input()
  public selectedHotel: HotelList;

  @Output()
  public updateHotel: EventEmitter<number> = new EventEmitter();
  searchHotel = '';


  selectHotel(id: number) {
    this.selectedHotel.id !== id ? this.updateHotel.emit(id) : false;
  }
}
