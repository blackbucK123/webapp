import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LoginService } from '../../Services/login.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  display: boolean = false;
  constructor(private router: Router, private store:LoginService) { }
  value = '';
  onEnter(value: string) {
    this.value = value;
    
  }
  btnClick(){
   
    this.router.navigate(['/login']); 
  };
  register(){
    this.timer()
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
