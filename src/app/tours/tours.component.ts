import { Component, OnInit} from '@angular/core';
import {TourService} from './tour.service';
import {Phone} from './tour';
       
@Component({
    selector: 'tour-component',
    templateUrl: './tours.component.html',
    providers:[TourService]

})
export class ToursComponent implements OnInit { 
     
    items: Phone[] = [];
    constructor(private dataService: TourService){}
     
    addItem(name: string, price: number){
         
        this.dataService.addData(name, price);
    }
    ngOnInit(){
        this.items = this.dataService.getData();
    }
}