import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';  
import { Router } from '@angular/router';
import { DataService } from '../../Services/data.service';
import { LoginService } from '../../Services/login.service';
import { BackendService } from '../../Services/backend.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-booking-confirmation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './booking-confirmation.component.html',
  styleUrl: './booking-confirmation.component.scss'
})
export class BookingConfirmationComponent {
  todayDate: any;
  value = '';
  closeResult = '';  
  display: boolean = false;
  constructor(private datePipe: DatePipe, private modalService: NgbModal, private router: Router, public data:DataService, private store:LoginService, public backend:BackendService) {
    this.todayDate = this.datePipe.transform(new Date(), 'dd-MM-yyyy');
  }
  
  ngOnInit() {
    if (this.store.loginStatus == 0) {
       this.router.navigate(['/login']);
    }
 }
  timer(content: any) {
    console.log('this.data.current_user ', JSON.stringify(this.data.current_user));
    console.log('this.todayDate ', this.todayDate);
    console.log('this.data.venueID  ', this.data.venueID );
    console.log('this.data.venue ', this.data.venue);
    console.log('this.data.courtID ', this.data.courtID);
    console.log('this.data.court_name ', this.data.court_name);
    console.log('this.data.slot ', this.data.slot);
    console.log('this.data.price ', this.data.price);
    console.log('this.data.tournament ', this.data.tournament);

    if(!!this.data.current_user && !!this.todayDate && !!this.data.venueID && !!this.data.venue && !!this.data.courtID && !!this.data.court_name && !! this.data.slot && !!this.data.price && !!this.data.tournament){
      console.log('All entries valid !!!');
      let booking = {
        bookingID: 0,
        userID: this.data.current_user.userID,
        bookingDate: this.todayDate,
        venueID: this.data.venueID,
        venueName: this.data.venue,
        courtID: this.data.courtID,
        courtName: this.data.court_name,
        slot: this.data.slot,
        paymentID: 0,
        amount: this.data.price,
        firstName:this.data.current_user.firstName,
        lastName: this.data.current_user.lastName,
        mobile:this.data.current_user.mobile,
        tournamentName: this.data.tournament,
        isRedeemed: false
      }
      let coupon = {
        couponID: 0,
        userID: this.data.current_user.userID || 0,
        firstName: this.data.current_user.firstName || '{}',
        lastName: this.data.current_user.lastName || '{}',
        couponDate: this.todayDate,
        isRedeemed: false
      }
      this.backend.addBooking(booking)
      .subscribe(booking_data => console.log(JSON.stringify(booking_data)));
      
      this.backend.createCoupon(coupon)
      .subscribe(coupon_data => console.log(JSON.stringify(coupon_data)));

      this.backend.getUserBookings(this.data.current_user.userID)
      .subscribe(booking_data => {
        this.data.user_booking_data = booking_data.data[0]
        if(!!this.data.user_booking_data){
          // console.log(JSON.stringify(this.data.user_booking_data))
        }
      }
      );
    }
   
    this.display = !this.display;
    let seconds: number = 1;
    const timer = setInterval(() => {
      seconds--;
      if(seconds == 0){
        this.display = !this.display;
        clearInterval(timer);
        this.data.bookingConfirmed = !this.data.bookingConfirmed
        this.open(content)
      }
    }, 1000);
  }
  onEnter(value: string) {
    this.value = value;
    
  }
  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
   
    
  }
  
  private getDismissReason(reason: any): string {
  
    this.btnClick()
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  btnClick(){
    this.modalService.dismissAll();
    this.router.navigate(['/payment']);
  }
  validateNumber(event: { keyCode: any; preventDefault: () => void; }) {
    const keyCode = event.keyCode;
  
    const excludedKeys = [8, 37, 39, 46];

    if (!((keyCode >= 48 && keyCode <= 57) ||
      (keyCode >= 96 && keyCode <= 105) ||
      (excludedKeys.includes(keyCode)))) {
      event.preventDefault();
    }
  }
}
function start() {
  throw new Error('Function not implemented.');
}

