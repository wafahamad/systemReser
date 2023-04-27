import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './lesComponents/home/home.component';
import { CinemaCComponent } from './lesComponents/cinema-c/cinema-c.component';
import { RestaurantCComponent } from './lesComponents/restaurant-c/restaurant-c.component';
import { HotelCComponent } from './lesComponents/hotel-c/hotel-c.component';
import { GuesthouseCComponent } from './lesComponents/guesthouse-c/guesthouse-c.component';
import { AboutusComponent } from './lesComponents/aboutus/aboutus.component';
import { ClientsComponent } from './lesComponents/clients/clients.component';
import { BlogComponent } from './lesComponents/blog/blog.component';
import { ReservationCComponent } from './lesComponents/reservation-c/reservation-c.component';
import { LoginComponent } from './lesComponents/login/login.component';

const routes: Routes = [
  {path:'home', title:'home',component:HomeComponent},
  {path:'cinema', title:'cinema',component:CinemaCComponent},
  {path:'restaurant', title:'restaurant',component:RestaurantCComponent},
  {path:'hotel', title:'hotel',component:HotelCComponent},
  {path:'guesthouse', title:'guesthouse', component:GuesthouseCComponent},
  {path:'aboutus',title:'aboutus', component:AboutusComponent},
  {path:'clients',title:'clients', component:ClientsComponent},
  {path:'blog',title:'blog', component:BlogComponent},
  {path:'reservation',title:'reservation',component:ReservationCComponent},
  {path:'login',title:'login',component:LoginComponent},
  {path:'', redirectTo:'home', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
