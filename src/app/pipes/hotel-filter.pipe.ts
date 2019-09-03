import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hotelFilter',
  pure: true
})
export class HotelFilterPipe implements PipeTransform {

  transform(HotelList: any[], searchStr: string, fieldName: string, fieldDesc: string, fieldStar: string) {
    if (HotelList.length === 0 || searchStr === '') {
      return HotelList;
    }
    return HotelList.filter(hotel => (hotel[fieldName] + hotel[fieldDesc] + hotel[fieldStar]).toLowerCase().indexOf(searchStr.toLowerCase()) !== -1);
  }

}
