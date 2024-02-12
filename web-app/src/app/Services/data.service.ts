import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public tournament = ''; 
  public venue = '';
  public slot = '';
  public price = '';
  public court_name = '';
  public courtID = 0;
  public venueID = 0;
  public coupon_count = 0;
  
  bookingConfirmed = false;

  public dashboard_data = {
    booking_count: null,
    user_count: null,
    coupon_count: null
  }
  public current_user : { userID: number | null, firstName: string | null, lastName: string | null, mobile: string | null } = {
    userID: null,
    firstName: null,
    lastName: null,
    mobile: null
  }
  public user_data: { userID: number | null, firstName: string | null, lastName: string | null, mobile: string | null }[] = [{
    userID: 0,
    firstName: null,
    lastName: null,
    mobile: null
}];
  public coupon_data = [{
    couponID: null,
    userID: null,
    firstName: null,
    lastName: null,
    couponDate: null,
    isRedeemed: false,
    bookings: [],
    bookingData: [
      {
        bookingID: null,
        bookingDate: null,
        tournamentName: null
      }
    ]
  }]
 public user_coupon_data = [
  {
    couponID: null,
    userID: null,
    firstName: null,
    lastName: null,
    couponDate: null,
    isRedeemed: false,
    bookings: [],
    bookingData: [
      {
        bookingID: null,
        bookingDate: null,
        tournamentName: null
      }
    ]
  }
 ]
  public slot_data = [{
    _id: null,
    amount: null,
    slots: [
        {
            slot: null,
            isAvailable: false
        }
    ]
}]
public booking_data = [
  {
    bookingID: null,
    userID: null,
    bookingDate: null,
    venueID: null,
    venueName: null,
    courtID: null,
    courtName: null,
    slot: null,
    paymentID: null,
    amount: null,
    firstName: null,
    lastName: null,
    mobile: null,
    tournamentName: null,
    isRedeemed: true
  }
]
public user_booking_data = [
  {
    bookingID: null,
    userID: null,
    bookingDate: null,
    venueID: null,
    venueName: null,
    courtID: null,
    courtName: null,
    slot: null,
    paymentID: null,
    amount: null,
    firstName: null,
    lastName: null,
    mobile: null,
    tournamentName: null,
    isRedeemed: true
  }
]
public payment_data = [
  {
  bookingID: null,
  bookingDate: null,
  amount: null,
  firstName: null,
  lastName: null
}
]

public court_data = [
    {
        court1: [
            {
                courtID: null,
                courtName: null,
                scheduleID_one: null,
                scheduleID_two: null,
                scheduleID_three: null
            }
        ],
        court2: [
          {
              courtID: null,
              courtName: null,
              scheduleID_one: null,
              scheduleID_two: null,
              scheduleID_three: null
          }
      ],
        venueID: null,
        venueName: null,
        courtID_one: null,
        courtID_two: null
  }
]
  constructor() { }
  setTournament(tournament: string) {
    this.tournament = tournament;
  }
  setVenue(venue: string) {
    this.venue = venue;
  }
  setVenueID(id: number) {
    this.venueID = id;
  }
  setSlot(slot: string) {
    this.slot = slot;
  }
  setPrice(price: string) {
    this.price = price;
  }
  setCourt(court: string) {
    this.court_name = court;
  }
  setCourtID(id: number) {
    this.courtID = id;
  }
  
}
