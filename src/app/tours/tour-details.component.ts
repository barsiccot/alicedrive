import { Component, OnInit} from '@angular/core';
import {TourService} from './tour.service';
import {Phone} from './tour';
       
@Component({
    selector: 'tour-details-component',
    templateUrl: './tour-details.component.html',
    styleUrls:['./tour-details.component.css']
})
export class TourDetailsComponent { 
    title = 'Recent Photos';
}