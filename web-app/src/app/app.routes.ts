import { RouterModule, Routes } from '@angular/router';

import { BookingConfirmationComponent } from './Views/booking-confirmation/booking-confirmation.component';
import { DashboardComponent } from './Views/dashboard/dashboard.component';
import { HomeComponent } from './Views/home/home.component';
import { LoginComponent } from './Views/login/login.component';
import { ManageBookingsComponent } from './Views/manage-bookings/manage-bookings.component';
import { ManageCouponComponent } from './Views/manage-coupon/manage-coupon.component';
import { ManageCourtsComponent } from './Views/manage-courts/manage-courts.component';
import { ManagePaymentsComponent } from './Views/manage-payments/manage-payments.component';
import { ManageUsersComponent } from './Views/manage-users/manage-users.component';
import { ManageVenueComponent } from './Views/manage-venue/manage-venue.component';
import { PaymentsComponent } from './Views/payments/payments.component';
import { RegisterComponent } from './Views/register/register.component';
import { ScheduleComponent } from './Views/schedule/schedule.component';
import { TournamentListComponent } from './Views/tournament-list/tournament-list.component';
import { VenueListComponent } from './Views/venue-list/venue-list.component';
import { LandingComponent } from './Views/landing/landing.component'; 
import { ManageTournamentsComponent } from './Views/manage-tournaments/manage-tournaments.component';
import {CouponsComponent} from './Views/coupons/coupons.component';



export const routes: Routes = [
    { path: '', redirectTo: 'landing', pathMatch: 'full' },
    { path: 'landing', component: LandingComponent},
    {path:"register" , component:RegisterComponent},
    {path:"login" , component:LoginComponent},
    {path:"home" , component:HomeComponent},
    {path:"coupon", component:CouponsComponent},
    {path:"dashboard" , component:DashboardComponent},
    {path:"manage-bookings" , component:ManageBookingsComponent},
    {path:"manage-coupon" , component:ManageCouponComponent},
    {path:"manage-courts" , component:ManageCourtsComponent},
    {path:"manage-payments" , component:ManagePaymentsComponent},
    {path:"manage-slots" , component:ManageTournamentsComponent},
    {path:"manage-users" , component:ManageUsersComponent},
    {path:"manage-venue" , component:ManageVenueComponent},
    {path:"tournaments" , component:TournamentListComponent},
    {path:"venues" , component:VenueListComponent},
    {path:"schedule" , component:ScheduleComponent},
    {path:"booking" , component:BookingConfirmationComponent},
    {path:"payment" , component:PaymentsComponent},
    { path: '**', component: LandingComponent }
];
