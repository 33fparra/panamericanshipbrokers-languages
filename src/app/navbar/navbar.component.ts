import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from '../cargar-script.service';
import { Routes } from '@angular/router';
import { PlaysoundService } from '../playsound.service';

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
    private playSound:PlaysoundService
    ) {
    _CargaScripts.Carga(["navbar"]);
  }

  ngOnInit(): void {
    
  }
  
  
 
    // playSound(){   
    //   console.log("entro")
       
    //   }
    
  }

