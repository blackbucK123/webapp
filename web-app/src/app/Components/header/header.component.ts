import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginService } from '../../Services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  showLogout = false
  user = localStorage.getItem('isUserLoggedIn');
constructor(private router: Router, public store: LoginService){
  if(this.user == 'true'){
    this.showLogout = !this.showLogout;
  }
}
logout(){
  this.store.setLoginStatus(0);
  this.router.navigate(['/login']); 
}
btnClick(){
 if(this.store.loginStatus == 1){
  this.router.navigate(['/home']); 
 }else if(this.store.loginStatus == 0){
  this.router.navigate(['/landing']); 
 }
};
}
