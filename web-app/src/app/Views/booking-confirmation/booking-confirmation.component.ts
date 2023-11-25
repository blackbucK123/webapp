import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';  
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-confirmation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './booking-confirmation.component.html',
  styleUrl: './booking-confirmation.component.scss'
})
export class BookingConfirmationComponent {
  closeResult = '';  
  display: any = 3;
  constructor(private modalService: NgbModal, private router: Router) {
    
  }
 

  
  timer() {
    let seconds: number = 3;
    const timer = setInterval(() => {
      seconds--;
      this.display = `${Math.floor(seconds)}`;
      if (seconds == 1) {
        this.modalService.dismissAll()
      }else if(seconds == 0){
        clearInterval(timer);
        this.router.navigate(['/home']); 
      }
    }, 1000);
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    this.timer();
    
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
 
}
function start() {
  throw new Error('Function not implemented.');
}

