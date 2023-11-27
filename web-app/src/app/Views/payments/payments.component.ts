import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../Services/data.service';
import { LoginService } from '../../Services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './payments.component.html',
  styleUrl: './payments.component.scss'
})
export class PaymentsComponent {
constructor(public data:DataService, private store:LoginService, private router:Router){}
ngOnInit() {
  if (this.store.loginStatus == 0) {
     this.router.navigate(['/login']);
  }
}
}
