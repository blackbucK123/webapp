import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LoginService } from '../../Services/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private router: Router, public store: LoginService) { }
  value = '';
  display: boolean = false;
  onEnter(value: string) {
    this.value = value;
    
  }
  btnClick(){
    
    this.timer()
  };
  validateNumber(event: { keyCode: any; preventDefault: () => void; }) {
    const keyCode = event.keyCode;
  
    const excludedKeys = [8, 37, 39, 46];

    if (!((keyCode >= 48 && keyCode <= 57) ||
      (keyCode >= 96 && keyCode <= 105) ||
      (excludedKeys.includes(keyCode)))) {
      event.preventDefault();
    }
  }

      
  timer() {
    this.display = true;
    let seconds: number = 3;
    const timer = setInterval(() => {
      seconds--;
      if(seconds == 0){
        clearInterval(timer);
        this.store.setLoginStatus(1);
        if(this.value == '123456'){
          this.router.navigate(['/dashboard'])
        }else{
          this.router.navigate(['/home']); 
        }
      }
    }, 1000);
  }
}

