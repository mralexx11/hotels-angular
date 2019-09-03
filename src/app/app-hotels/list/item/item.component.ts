import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {HotelList} from '../../../interfaces/interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements  OnChanges {

  @Input()
  public hotel: HotelList;

  @Input()
  public selectedHotel: HotelList;

  public isComponentSelected = false;

  public class: string;

  public pointer: string;

  private readonly selected: string = 'selected';

  private readonly activePointer: string = 'active';

  constructor() {
  }



  ngOnChanges(changes: SimpleChanges): void {
    let hotel: HotelList = changes.selectedHotel.currentValue;
    this.isComponentSelected = hotel.id === this.hotel.id;
    this.class = this.isComponentSelected ? this.selected : '';
    this.pointer = !this.isComponentSelected ? this.activePointer : '';
  }

  toFavorite() {
    this.hotel.fav = !this.hotel.fav;
  }
}

