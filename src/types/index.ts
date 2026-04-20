export interface Cabin {
  id: string;
  name: string;
  beds: number;
  baths: number;
  sleeps: number;
  petFriendly: boolean;
  description: string;
  image: string;
  price?: number;
  features?: string[];
}

export interface BookingDetails {
  checkIn: string;
  checkOut: string;
  adults: number;
  children: number;
}
