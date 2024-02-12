import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LoginService } from '../../Services/login.service';
import { BackendService } from '../../Services/backend.service';
import { DataService } from '../../Services/data.service';
import { FormsModule } from '@angular/forms';
import { ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  @ViewChild('box', {static: false}) otpInput!: ElementRef;
  info = '';
  error = '';
  showOTP = false;
  status = '';
  attempt = 0;
  mobileNumber = '';
  admin = false;
  constructor(private router: Router, public store: LoginService, public backend:BackendService, public data:DataService) { }
  value = '';
  display: boolean = false;
  onEnter(value: string) {
    this.value = value;
    
  }
  clearError(){
    this.error = '';
    this.info = '';
  }
  btnClick(){
    if(this.attempt < 3){
      this.backend.verifyOTP(this.value)
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
  };
  clearOTPInput() {
    if (this.otpInput && this.otpInput.nativeElement) {
      this.otpInput.nativeElement.value = '';
    }
  }
  getLoginInfo(){
    if(this.status === 'approved'){
      if(this.admin){
        let admin : { userID: number | null, firstName: string | null, lastName: string | null, mobile: string | null } = {
          userID: null,
          firstName: 'admin',
          lastName: null,
          mobile: null
        }
        this.data.current_user = admin;
        this.getdashboardData();
            if(!!this.data.dashboard_data){
              this.timer()
            }
      }else{
        this.backend.getLoginInfo(this.mobileNumber)
        .subscribe(data =>  {
          if(!!data.error){
            this.error = data.message;
            this.display = false;
            this.showOTP = false;
            this.clearOTPInput();
            this.mobileNumber = '';
            this.thirdTimer();
            return
          }
          this.data.current_user = data.data[0]
          if(!!this.data.current_user){
            console.log('Current User : ', JSON.stringify(this.data.current_user))
            this.timer();
          }
        });
      }
    }
  }
  validateNumber() {
      if(this.mobileNumber.length === 9){
        this.showOTP = true;
        this.info = 'OTP is sent to your mobile number.'
        this.backend.sendOTP()
        .subscribe(data =>{
          this.status = data
          console.log(this.status);
        });
      }else if(this.mobileNumber.length < 9){
        this.showOTP = false;
      }
  }

  getdashboardData(){
    this.backend.getDashboard()
    .subscribe(data =>  {
      this.data.dashboard_data = data
      if(!!this.data.dashboard_data)
      return
    });
  }      
  timer() {
    console.log('Value : ', this.value);
    this.display = true;
    let seconds: number = 3;
    const timer = setInterval(() => {
      seconds--;
      if(seconds == 0){
        clearInterval(timer);
        this.store.setLoginStatus(1);
        if(this.admin){
            this.router.navigate(['/dashboard'])
          }else{
            this.router.navigate(['/home']); 
          }
        
      }
    }, 1000);
  }
  secondTimer() { 
    let seconds: number = 3;
    this.display = true;
    const timer = setInterval(() => {
      seconds--;
      if(seconds == 0){
        this.getLoginInfo()        
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
}

