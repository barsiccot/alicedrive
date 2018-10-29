import {Phone} from './tour';
 
import { TOUR } from './mock-tours';
export class TourService{
 
   
    getData(): Phone[] {
         
        return TOUR;
    }
    addData(name: string, price: number){
         
        TOUR.push(new Phone(name, price));
    }
}