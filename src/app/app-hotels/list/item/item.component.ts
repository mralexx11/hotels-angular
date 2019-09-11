import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { HotelList } from '../../../interfaces/interface';
import { HotelsService} from '../../hotels.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements  OnChanges, OnInit {

  @Input()
  public hotel: HotelList;

  @Input()
  public selectedHotel: HotelList;

  public isComponentSelected: boolean = false;

  public class: string;

  public pointer: string;

  private readonly selected: string = 'selected';

  private readonly activePointer: string = 'active';

  public ngOnInit(): void {

  }

  public ngOnChanges(changes: SimpleChanges): void {
    let hotel: HotelList = changes.selectedHotel.currentValue;
    this.isComponentSelected = hotel.id === this.hotel.id;
    this.class = this.isComponentSelected ? this.selected : '';
    this.pointer = !this.isComponentSelected ? this.activePointer : '';
  }

  toFavorite() {
    this.hotel.fav = !this.hotel.fav;
  }
}

