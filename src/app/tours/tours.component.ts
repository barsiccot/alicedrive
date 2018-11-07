import { Component, OnInit} from '@angular/core';
import {TourService} from './tour.service';
import {Phone} from './tour';
       
@Component({
    selector: 'tour-component',
    templateUrl: './tours.component.html',
    styleUrls:['./tours.component.css'],

})
export class ToursComponent implements OnInit { 
   
     title ='Gallery';

    items: Phone[] = [];
    constructor(private dataService: TourService){}
     
    addItem(name: string, price: number){
         
        this.dataService.addData(name, price);
    }
    ngOnInit(){
        this.items = this.dataService.getData();
    }
}