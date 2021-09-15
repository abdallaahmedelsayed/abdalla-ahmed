import { Component, OnInit } from '@angular/core';
import{ TestService} from '../test.service' ;

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {

  servicesData = [
    {
      iconClass:"fas fa-gem fa-5x",
      heading:"sturdy theme",
      description:"our themes are updated regularly to keep them bug free!"
    },
    {
      iconClass:"fas fa-laptop fa-5x",
      heading:"up to date",
      description:"All dependencies are kept current to keep things fresh"
    },
    {
      iconClass:"fas fa-globe fa-5x",
      heading:"ready to publish",
      description:"you can use this design as is ,or you can make changes!"
    },
    {
      iconClass:"fas fa-heart fa-5x",
      heading:"made with love",
      description:"it's really open source if it's not made with love?"
    },
    
    ];

    exploreData=[
      {
         img: "../..assets/img/potfolio/thumbnails/1.jpg",
         title: "Explore"
      },
      {
        img: "../..assets/img/potfolio/thumbnails/2.jpg",
        title: "Experience"
     }
    ]
    constructor( public testService:TestService) {
      testService.sayWelcome('Explore Component')
     }

  ngOnInit(): void {
  }

}
