import { NgModule,CUSTOM_ELEMENTS_SCHEMA, Input }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { ImageFilterPipe }  from './images/shared/filter.pipe';

import { AppComponent }  from './app.component';
import { AboutComponent } from './about.component';
import { HeaderComponent }  from './header/header.component';
import { BannerComponent }  from './banner/banner.component';
import { FooterComponent }  from './footer/footer.component';
import { ImageDetailComponent }  from './images/image-detail.component';
import { GalleryComponent }  from './gallery/gallery.component';
import { MediaComponent }  from './media/media.component';
import { MusicComponent }  from './music/music.component';
import { NewsComponent }  from './news/news.component';
import { BandComponent } from './band/band.component';
import { ToursComponent } from './tours/tours.component';
import { TourDetailsComponent } from './tours/tour-details.component';
import { ImageService }  from './images/shared/image.service';
import { TourService } from './tours/tour.service';
const appRoutes: Routes = [
  
  { path: 'about', component: AboutComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'image/:id', component: ImageDetailComponent },

  { path: 'tour-details', component: TourDetailsComponent },
  { path: 'news',       component: NewsComponent },
  { path: 'media',      component: MediaComponent },
  { path: 'music',      component: MusicComponent },
  { path: 'tours',      component: ToursComponent },
  
];

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports:      [ 
     BrowserModule,
     FormsModule, 
     RouterModule.forRoot(
     appRoutes,
    { enableTracing: true } // <-- debugging purposes only
  ) ],
  declarations: [ AppComponent ,
     HeaderComponent,
     BannerComponent,
     FooterComponent,
     GalleryComponent,
     AboutComponent,
     ImageDetailComponent,
     NewsComponent,
     ImageFilterPipe,
     MusicComponent,
     MediaComponent,
    BandComponent,
  ToursComponent,
  TourDetailsComponent
],
providers:[ImageService,TourService,ImageFilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
