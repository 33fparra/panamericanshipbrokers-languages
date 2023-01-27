import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from '../cargar-script.service';
import { Routes } from '@angular/router';
import { PlaysoundService } from '../playsound.service';
        ///Importaciones para lenguajes
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private _CargaScripts:CargarScriptsService,
    private playSound:PlaysoundService,
        ///Importaciones para lenguajes
    public translate: TranslateService
    ) {
    _CargaScripts.Carga(["navbar"]);
  }
  espana:string = '../assets/img/bandera/espana.png';
  english:string = '../assets/img/bandera/Inglaterra.png';
  cambioIdioma:string = ''; 

  options = [
    { value: 'es', imageUrl: '../assets/img/bandera/espana.png', alt: 'Imagen Opción 1', label: 'Opción 1' },
    { value: 'en', imageUrl: '../assets/img/bandera/Inglaterra.png', alt: 'Imagen Opción 2', label: 'Opción 2' },
    
  ];
  switchLang = (lang: string) => {
    this.translate.use(lang)
    console.log();
    this.cambioIdioma = lang;
    
  }

  ngOnInit(): void {
    this.switchLang('es');
  }
  }

