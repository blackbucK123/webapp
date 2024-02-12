import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LoginService } from '../../Services/login.service';
import { DataService } from '../../Services/data.service';

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.scss'
})
export class ScheduleComponent {
  constructor(private router: Router, private store:LoginService, private data:DataService) { }
  btnClick(venue: string, slot:string, price:string){
    this.data.setVenue(venue);
    this.data.setSlot(slot);
    this.data.setPrice(price);
    this.router.navigate(['/booking']); 
  };
  ngOnInit() {
    if (this.store.loginStatus == 0) {
       this.router.navigate(['/login']);
    }
 }
}
