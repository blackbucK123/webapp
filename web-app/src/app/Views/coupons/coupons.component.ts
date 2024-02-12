import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LoginService } from '../../Services/login.service';
import { DataService } from '../../Services/data.service';
import { BackendService } from '../../Services/backend.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-coupons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './coupons.component.html',
  styleUrl: './coupons.component.scss'
})
export class CouponsComponent {
  constructor(private router: Router, private route: ActivatedRoute, private store:LoginService, public data:DataService, public backend:BackendService) { }
  btnClick(route: string){
    this.router.navigate([`${route}`]); 
  };
  ngOnInit() {
    if (this.store.loginStatus == 0) {
       this.router.navigate(['/login']);
    }
 }
 redeemNow(couponID: any){
  console.log('couponID ', couponID);
  console.log('this.data.current_user.userID ', JSON.stringify(this.data.current_user));
  console.log('this.data.current_user.userID ', this.data.current_user.userID);
  if(!!couponID && !!this.data.current_user.userID){
    console.log('In the method');
    this.backend.redeemCoupon(Number(couponID))
    .subscribe(coupon_data => {
      if(!!coupon_data){
        console.log(JSON.stringify(coupon_data))
      }
    }
    );
    this.backend.getUserCoupons(this.data.current_user.userID)
    .subscribe(coupon_data => {
      this.data.user_coupon_data = coupon_data
      if(!!this.data.user_coupon_data){
        console.log(JSON.stringify(this.data.user_coupon_data))
        this.refresh();
      }
    }
    );
  }
 }
 refresh(): void {
  this.route.queryParams.subscribe(() => {
    this.router.navigateByUrl('/coupon', {skipLocationChange: true}).then(() => {
      this.router.navigate([this.router.url]);
    });
  });
}
}
