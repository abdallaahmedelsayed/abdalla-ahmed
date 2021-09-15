import { Component, OnInit } from '@angular/core';
import{ TestService} from '../test.service' ;

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css']
})
export class PagenotfoundComponent implements OnInit {

  constructor( public testService:TestService) {
    testService.sayWelcome('Page Not Found Component')
   }

  ngOnInit(): void {
  }

}
