import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { BackendService } from '../../Services/backend.service';
import { DataService } from '../../Services/data.service';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  allow_visit = false;
  dashboard_data = {
    booking_count: null,
    user_count: null,
    coupon_count: null
  };
  constructor(private router: Router, private backend:BackendService, public data:DataService) {
    this.dashboard_data = this.data.dashboard_data;
    if(this.dashboard_data.coupon_count) this.data.coupon_count = this.dashboard_data.coupon_count;
    this.getUserData();
    this.getCouponData();
    this.getSlotData();
    this.getBookingData();
    this.getCourtData();
    this.getPaymentData();

    if(!!this.data.user_data || !!this.data.coupon_data || !!this.data.slot_data || !!this.data.booking_data || !!this.data.court_data || !!this.data.payment_data){
        this.allow_visit = true;
    }
   }

  getUserData(){
      this.backend.getUsers()
      .subscribe(data =>  {
        this.data.user_data = data.data[0]
        if(this.data.user_data){
          console.log(JSON.stringify(this.data.user_data));
          return
        }
      }); 
  }
  getCouponData(){
    this.backend.getCoupons()
    .subscribe(data =>  {
      this.data.coupon_data = data
      if(this.data.coupon_data){
        console.log(JSON.stringify(this.data.coupon_data));
        return
      }
    }); 
}
getSlotData(){
  this.backend.getSlots()
  .subscribe(data =>  {
    this.data.slot_data = data.data[0]
    if(this.data.slot_data){
      console.log(JSON.stringify(this.data.slot_data));
      return
    }
  }); 
}
getBookingData(){
  return this.backend.getBookings()
  .subscribe(data =>  {
    this.data.booking_data = data.data[0][0]
    if(this.data.booking_data){
      console.log(JSON.stringify(this.data.booking_data));
      return
    }
  }); 
}
getCourtData(){
  return this.backend.getCourts()
  .subscribe(data =>  {
    this.data.court_data = data
    if(this.data.court_data){
      console.log(JSON.stringify(this.data.court_data));
      return
    }
  }); 
}
getPaymentData(){
  return this.backend.getPayments()
  .subscribe(data =>  {
    this.data.payment_data = data.data[0]
    if(this.data.payment_data){
      console.log(JSON.stringify(this.data.payment_data));
      return
    }
  }); 
}
  btnClick(route: string){
    this.router.navigate([`${route}`]); 
  };

}
