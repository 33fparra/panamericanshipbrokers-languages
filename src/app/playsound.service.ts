import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlaysoundService {
  yaSonando = false;
  onWindowScrolled: boolean = false;
  constructor() { }


  onWindowScroll(){
    if(
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop>100
    ){ this.playSound()
       this.onWindowScrolled = true};
  };

  playSound(){
    console.log("entro");
    
    if (this.yaSonando) return
  // console.log("funciona");
  let audio = new Audio();
  audio.src = '../assets/sound/fondopanamerican.mp3';
  audio.load();
  audio.play();
    this.yaSonando = true;
}
  
}
