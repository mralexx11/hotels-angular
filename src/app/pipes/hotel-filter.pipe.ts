import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hotelFilter',
  pure: true
})
export class HotelFilterPipe implements PipeTransform {

  transform(HotelList: any, searchStr: string, fieldName: string) {
    if (HotelList.length === 0 || searchStr === '') {
      return HotelList;
    }
    return HotelList.filter(hotel => hotel[fieldName].toLowerCase().indexOf(searchStr.toLowerCase()) !== -1);
  }

}
