import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LoginService } from '../../Services/login.service';
import { DataService } from '../../Services/data.service';

@Component({
  selector: 'app-tournament-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tournament-list.component.html',
  styleUrl: './tournament-list.component.scss'
})
export class TournamentListComponent {
  constructor(private router: Router, private store:LoginService, private data:DataService) { }
  btnClick(tournament: string){
    this.data.setTournament(tournament);
    this.router.navigate(['/venues']); 
  };
  ngOnInit() {
    if (this.store.loginStatus == 0) {
       this.router.navigate(['/login']);
    }
 }
}
