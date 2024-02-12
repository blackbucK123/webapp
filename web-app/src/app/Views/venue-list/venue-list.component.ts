import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LoginService } from '../../Services/login.service';
import { DataService } from '../../Services/data.service';

@Component({
  selector: 'app-venue-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './venue-list.component.html',
  styleUrl: './venue-list.component.scss'
})
export class VenueListComponent {
  constructor(private router: Router, private store:LoginService, private data:DataService) { }
  btnClick(venue:string, venueID: number, courtID: number, courtName: string){
    this.data.setVenue(venue);
    this.data.setVenueID(venueID);
    this.data.setCourt(courtName);
    this.data.setCourtID(courtID);
    this.router.navigate(['/schedule']); 
  };
  ngOnInit() {
    if (this.store.loginStatus == 0) {
       this.router.navigate(['/login']);
    }
 }
}
