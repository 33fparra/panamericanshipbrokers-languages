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
  // yaSonando = false;
  // onWindowScrolled: boolean = false;
  constructor(
    private _CargaScripts:CargarScriptsService,
    private playSound:PlaysoundService,
        ///Importaciones para lenguajes
    public translate: TranslateService
    ) {
    _CargaScripts.Carga(["navbar"]);
  }
  switchLang = (lang: string) => {
    this.translate.use(lang)
  }

  ngOnInit(): void {

  }





  }

