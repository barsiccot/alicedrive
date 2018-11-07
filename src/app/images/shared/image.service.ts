import { Injectable} from '@angular/core';
@Injectable()
export class ImageService{
visibleImages:any[];
 getImages(){
     return this.visibleImages=IMAGES.slice(0);
 }
 getImage(id:number){
     return IMAGES.slice(0).find(image => image.id==id)
 }
} 
const IMAGES=[
    {"id":1,"category":'newYear2017',"url":"./img/alicedrive/top.jpg", "imageList":
       [{"id":1,"url":"./img/alicedrive/top.jpg"},
       {"id":2,"url":"./img/alicedrive/top.jpg"}]
    },
    {"id":2,"category":'newYear2017',"url":"./img/alicedrive/banner.jpg"},
    {"id":3,"category":'newYear2016',"url":"./img/alicedrive/top.jpg"},
    {"id":4,"category":'newYear2016',"url":"./img/alicedrive/footer.jpg"},
    {"id":5,"category":'newYear2015',"url":"./img/alicedrive/top.jpg"},
    {"id":6,"category":'newYear2015',"url":"./img/alicedrive/top.jpg"}
]