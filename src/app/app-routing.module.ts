import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlaceappointmentComponent } from './placeappointment/placeappointment.component';
import { ViewcomponentComponent } from './viewcomponent/viewcomponent.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ErrorComponent } from './error/error.component';



const routes: Routes = [
  
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'appointment',component:PlaceappointmentComponent},
  {path:'view',component:ViewcomponentComponent},
  {path:'contactus',component:ContactusComponent},


  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
