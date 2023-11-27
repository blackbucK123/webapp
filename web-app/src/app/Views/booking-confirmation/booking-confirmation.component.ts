import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';  
import { Router } from '@angular/router';
import { DataService } from '../../Services/data.service';
import { LoginService } from '../../Services/login.service';

@Component({
  selector: 'app-booking-confirmation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './booking-confirmation.component.html',
  styleUrl: './booking-confirmation.component.scss'
})
export class BookingConfirmationComponent {
  value = '';
  closeResult = '';  
  display: boolean = false;
  constructor(private modalService: NgbModal, private router: Router, public data:DataService, private store:LoginService) {
    
  }
  ngOnInit() {
    if (this.store.loginStatus == 0) {
       this.router.navigate(['/login']);
    }
 }
  timer(content: any) {
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

