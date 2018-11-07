import { Component , OnInit} from '@angular/core';
import { ImageService } from './shared/image.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'imagedetail-component',
  templateUrl: './image-detail.component.html',
  styleUrls:['./image-detail.component.html'],

})
export class ImageDetailComponent implements OnInit {
  visibleImages : any[] = [];
  image: any;
  constructor(private imageService: ImageService, private route:ActivatedRoute){
  }
ngOnInit(){
  this.image =this.imageService.getImage(
   + this.route.snapshot.params['id']
  )
}
}