import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { JumbotronComponent } from '../../Components/jumbotron/jumbotron.component'
import { LoginService } from '../../Services/login.service';
import { DataService } from '../../Services/data.service';
import { BackendService } from '../../Services/backend.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, JumbotronComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private router: Router,  private store:LoginService, public data:DataService, public backend:BackendService) { 
    if(!!this.data.current_user.userID){
      this.backend.getUserBookings(this.data.current_user.userID)
      .subscribe(booking_data => {
        if(!!booking_data.data){this.data.user_booking_data = booking_data.data[0]}
        if(!!this.data.user_booking_data){
          // console.log(JSON.stringify(this.data.user_booking_data.length))
        }
      }
      );
      this.backend.getUserCoupons(this.data.current_user.userID)
      .subscribe(coupon_data => {
        this.data.user_coupon_data = coupon_data
        if(!!this.data.user_coupon_data){
          // console.log(JSON.stringify(this.data.user_coupon_data))
          this.data.coupon_count = this.data.user_coupon_data.length
        }
      }
      );
    }
  }
  ngOnInit() {
    if (this.store.loginStatus == 0) {
       this.router.navigate(['/login']);
    }
 }
 btnClick(route: string){
  this.router.navigate([`${route}`]); 
};
  
}
