import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'FitnessTrainerApp';

  public ngOnInit(){

    $(document).ready(function(){
      $(".hamburger .hamburger__inner").click(function(){
        $(".wrapper").toggleClass("active")
      })
    
      $(".top_navbar .fas").click(function(){
         $(".profile_dd").toggleClass("active");
      })
    })
    
  }
}
