import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 portfolio :string="portfolio";
 img:string="../assets/img/img.jpg"
 name :string="Abdalla Ahmed";
 faculty :string="Computer science";
 id :string="20181877";
 track :string="Front-End";
 btnValue:string="5/9/2021"
 isAuth:boolean  =false;
 toggleUserState():void{
this.isAuth=!this.isAuth;
this.btnValue=this.isAuth ? "5/4/2021" : "5-April-2021"
 }
}
