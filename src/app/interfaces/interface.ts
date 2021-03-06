export interface HotelList {
  id: number,
  fav: boolean,
  title: string,
  address: string,
  description: string,
  phone: string,
  picture: string,
  photos: string[],
  weather: {
    temperature: number,
    wind: number,
    icon: string
  },
  profile: {
    followers: number,
    following: number,
    photo: string
  },
  stars: number;
}
