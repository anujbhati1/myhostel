export interface Hostel {
  address: string;
  createdAt: string; // ISO 8601 timestamp
  hostelRent: number | null;
  id: string;
  lat: number;
  lng: number;
  name: string;
  updatedAt: string; // ISO 8601 timestamp
  userId: string;
}
