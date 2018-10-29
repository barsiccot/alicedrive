import { Component,OnInit} from '@angular/core';
import { Music } from '../music';
import { MUSICS } from '../music-mock';
@Component({
  selector: 'music-component',
  templateUrl: './music.component.html'
})
export class MusicComponent implements OnInit {

  heroes = MUSICS;
  selectedHero: Music;

  constructor() { }

  ngOnInit() {
  }

  onSelect(music: Music): void {
    this.selectedHero = music;
  }
}