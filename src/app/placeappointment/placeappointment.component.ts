import { Component, OnInit } from '@angular/core';
import { Appointment } from '../appmodel';
import { AppointmentserviceService } from '../appointmentservice.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-placeappointment',
  templateUrl: './placeappointment.component.html',
  styleUrls: ['./placeappointment.component.css']
})
export class PlaceappointmentComponent implements OnInit {

  appointment:Appointment = new Appointment();
  //myForm: FormGroup;


  constructor(private appointService : AppointmentserviceService) { 
  }

  textBoxDisabled = true;


  toggle(){
    this.textBoxDisabled = !this.textBoxDisabled;
  }

  ngOnInit(): void {
  }

  save(){

    //this.appointment.id=6;
    this.appointService.postview(this.appointment).subscribe(appointment => this.appointment = appointment);
  }

  onSubmit(){
    this.save();
    //this.myForm.reset();
    
  }

}
