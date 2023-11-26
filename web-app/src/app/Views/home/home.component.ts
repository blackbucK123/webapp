import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { JumbotronComponent } from '../../Components/jumbotron/jumbotron.component'
import { LoginService } from '../../Services/login.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, JumbotronComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private router: Router,  private store:LoginService) { 
    
  }
  ngOnInit() {
    if (this.store.loginStatus == 0) {
       this.router.navigate(['/login']);
    }
 }
  btnClick(){
    this.router.navigate(['/tournaments']); 
  };
  
}
