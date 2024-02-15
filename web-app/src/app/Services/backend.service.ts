import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private apiUrl = environment.apiUrl;
  public booking = Booking;
  constructor(private http: HttpClient) { }
  getDashboard(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/dashboard/`);
  }
  getLoginInfo(mobile: string): Observable<any> {

    return this.http.get<any>(`${this.apiUrl}/users/${mobile}`);
  }
  getUsers(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/users/`);
  }
  getCoupons(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/coupons/`);
  }
  getCourts(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/venues/`);
  }
  getBookings(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/bookings/`);
  }
  getSlots(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/slots/`);
  }
  getPayments(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/payments/`);
  }

  addBooking(booking: Booking): Observable<Booking> {
    const httpOptions = {
      headers: new HttpHeaders({ 'accept': 'application/json' , 'Content-Type': 'application/json'})
    };
    return this.http.post<Booking>(`${this.apiUrl}/bookings/`, booking, httpOptions)
      .pipe(
        //To-Do
      );
  }
  getUserBookings(userID: any){
    userID = Number(userID);
    return this.http.get<any>(`${this.apiUrl}/bookings/${userID}`);
  }

  getUserCoupons(userID: number){
    return this.http.get<any>(`${this.apiUrl}/coupons/${userID}`);
  }
  redeemCoupon(userID: number){
    const httpOptions = {
      headers: new HttpHeaders({ 'accept': 'application/json' , 'Content-Type': 'application/json'})
    };
    return this.http.put<any>(`${this.apiUrl}/coupons/${userID}`,httpOptions);
  }
  createCoupon(coupon: Coupon){
    const httpOptions = {
      headers: new HttpHeaders({ 'accept': 'application/json' , 'Content-Type': 'application/json'})
    };
    return this.http.post<Coupon>(`${this.apiUrl}/coupons/`, coupon, httpOptions)
      .pipe(
        //To-Do
      );
  }
  sendOTP(mobile: any){
    const httpOptions = {
      headers: new HttpHeaders({ 'accept': 'application/json' })
    };
    return this.http.post<any>(`${this.apiUrl}/otp/?mobile_number=${mobile}`, httpOptions)
      .pipe(
        //To-Do
      );
  }
  verifyOTP(otp: any, mobile: any){
    return this.http.get<any>(`${this.apiUrl}/otp/?otp_code=${otp}&mobile_number=${mobile}`);
  }

  addUser(user: User){
    const httpOptions = {
      headers: new HttpHeaders({ 'accept': 'application/json' , 'Content-Type': 'application/json'})
    };
    return this.http.post<any>(`${this.apiUrl}/users/`, user, httpOptions)
      .pipe(
        //To-Do
      );
  }
  }
  


class Booking{
    bookingID!: number;
    userID!: any;
    bookingDate!: string;
    venueID!: number;
    venueName!: string;
    courtID!: number;
    courtName!: string;
    slot!: string;
    paymentID!: number;
    amount!: string;
    firstName!: any;
    lastName!: any;
    mobile!: any;
    tournamentName!: string;
    isRedeemed: boolean = false;
}

class Coupon{
  couponID!: number;
  userID!: number;
  firstName!: string;
  lastName!: string;
  couponDate!: string;
  isRedeemed: boolean = false;
}

class User{
  userID!: number;
  firstName!: string;
  lastName!: string;
  mobile!: string;
}