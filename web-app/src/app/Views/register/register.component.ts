import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LoginService } from '../../Services/login.service';
import { FormsModule } from '@angular/forms';
import { ViewChild, ElementRef } from '@angular/core';
import { BackendService } from '../../Services/backend.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  @ViewChild('box', {static: false}) otpInput!: ElementRef;
  showOTP = false;
  display: boolean = false;
  info = '';
  error = '';
  status = '';
  attempt = 0;
  mobileNumber = '';
  firstname = '';
  lastname = '';

  constructor(private router: Router, private store:LoginService, public backend:BackendService) { }
  value = '';
  onEnter(value: string) {
    this.value = value;
    
  }
  clearError(){
    this.error = '';
    this.info = '';
  }
  clearOTPInput() {
    if (this.otpInput && this.otpInput.nativeElement) {
      this.otpInput.nativeElement.value = '';
    }
  }
  btnClick(){
    this.router.navigate(['/login']); 
  };
  register(){
    if(this.attempt < 3){
      this.backend.verifyOTP(this.value, this.mobileNumber)
      .subscribe(data => {
        this.status = data
        if(this.status !== 'approved'){
          this.error = 'Invalid OTP please again.'
          this.attempt++
        }
      })
    }else{
      this.error = 'You have reached attempt limit. Please wait 10 mins to re-try login.'
    }
    console.log(this.status);
    this.secondTimer();
  }
  validateNumber() {
    console.log(this.mobileNumber);
    console.log(this.firstname);
    console.log(this.lastname);
    if(this.mobileNumber.length === 10 && this.firstname.length > 0 && this.lastname.length > 0){
      this.showOTP = true;
      this.info = 'OTP is sent to your mobile number.'
      this.backend.sendOTP(this.mobileNumber)
      .subscribe(data =>{
        this.status = data
        console.log(this.status);
      });
    }else if(this.mobileNumber.length < 9){
      this.showOTP = false;
    }
  }
 createUser(){
  let user = {
    userID: 0,
    firstName : this.firstname,
    lastName: this.lastname,
    mobile: this.mobileNumber
  }
  this.backend.addUser(user)
  .subscribe(data => {
    if(!!data.error){
      this.error = data.message;
      this.display = false;
      this.showOTP = false;
      this.firstname = '';
      this.lastname = '';
      this.clearOTPInput();
      this.mobileNumber = '';
      this.thirdTimer();
      return
    }
    console.log(JSON.stringify(data.data[0]));
    if(!!data.data[0]){
      console.log(JSON.stringify(data.data[0]));
      this.timer();
    }
  })
 }
  secondTimer() { 
    let seconds: number = 3;
    this.display = true;
    const timer = setInterval(() => {
      seconds--;
      if(seconds == 0){
        this.createUser()        
      }
    }, 1000);
  }
  thirdTimer() { 
    let seconds: number = 3;
    const timer = setInterval(() => {
      seconds--;
      if(seconds == 0){
       this.error = ''    
      }
    }, 1000);
  }
  timer() {
    this.display = true;
    let seconds: number = 3;
    const timer = setInterval(() => {
      seconds--;
      if(seconds == 0){
        clearInterval(timer);
        this.router.navigate(['/login']); 
      }
    }, 1000);
  }
}
