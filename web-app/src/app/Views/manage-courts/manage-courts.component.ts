import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LoginService } from '../../Services/login.service';

@Component({
  selector: 'app-manage-courts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './manage-courts.component.html',
  styleUrl: './manage-courts.component.scss'
})
export class ManageCourtsComponent {
  constructor(private router: Router, private store:LoginService) { }
  btnClick(route: string){
    this.router.navigate([`${route}`]); 
  };
  ngOnInit() {
    if (this.store.loginStatus == 0) {
       this.router.navigate(['/login']);
    }
 }
}
