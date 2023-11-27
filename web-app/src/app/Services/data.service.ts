import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public tournament = ''; 
  public venue = '';
  public slot = '';
  public price = 0.0;
  bookingConfirmed = false;

  constructor() { }
  setTournament(tournament: string) {
    this.tournament = tournament;
  }
  setVenue(venue: string) {
    this.venue = venue;
  }
  setSlot(slot: string) {
    this.slot = slot;
  }
  setPrice(price: number) {
    this.price = price;
  }
  
}
