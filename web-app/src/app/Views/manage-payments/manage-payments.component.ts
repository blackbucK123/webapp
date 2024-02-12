import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LoginService } from '../../Services/login.service';
import { DataService } from '../../Services/data.service';

@Component({
  selector: 'app-manage-payments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './manage-payments.component.html',
  styleUrl: './manage-payments.component.scss'
})
export class ManagePaymentsComponent {
  constructor(private router: Router, private store:LoginService, public data:DataService) { }
  btnClick(route: string){
    this.router.navigate([`${route}`]); 
  };
  ngOnInit() {
    if (this.store.loginStatus == 0) {
       this.router.navigate(['/login']);
    }
 }
}
