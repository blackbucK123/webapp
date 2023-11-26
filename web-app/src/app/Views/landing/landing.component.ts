import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { JumbotronComponent } from '../../Components/jumbotron/jumbotron.component'
import { CardComponent } from '../../Components/card/card.component';
import { HeaderComponent } from '../../Components/header/header.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, HeaderComponent, JumbotronComponent, CardComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {
  constructor(private router: Router) { }
  btnClick(route: string){
    this.router.navigate([`${route}`]); 
  };
  
}
