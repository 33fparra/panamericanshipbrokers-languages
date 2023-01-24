import { DOCUMENT } from '@angular/common';
import { ThisReceiver } from '@angular/compiler';
import { Component, Inject, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'brokers';
  yaSonando = false;
  onWindowScrolled: boolean = false;

  constructor(@Inject(DOCUMENT) private document: Document,
    ///Importaciones para lenguajes
    public translate: TranslateService
  ) {
    ///Importaciones para lenguajes
    translate.addLangs(['es','en']);
    const lang = translate.getBrowserLang()
    if ((lang !== 'es') && (lang !== 'en')) {
      translate.setDefaultLang('en');
    }
  }


  // onWindowScroll() {
  //   // console.log("entro");
  //   if(window.pageYOffset ||  document.documentElement.scrollTop || document.body.scrollTop > 1) {
  //     console.log("llega aqui?");

  //     this.playSound();

  //     this.onWindowScrolled = true;
  //   }
  // };

  playSound() {
    // console.log("entro");

    if (this.yaSonando) return
    let audio = new Audio();
    audio.src = '../assets/sound/fondopanamerican.mp3';
    audio.load();
    audio.play();
    this.yaSonando = true;
  };

  ngOnInit(): void {
  };




}
