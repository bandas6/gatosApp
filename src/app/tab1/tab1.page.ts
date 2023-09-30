import { Component } from '@angular/core';
import { GatosService } from '../services/gatos/gatos.service';
import { Gatos } from './interfaces/gatos.interface';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  listadoGatos: Gatos[] = []

  constructor(private gatosService:GatosService) {
    this.obtenerListadoGatos()
  }

  obtenerListadoGatos(){
    this.gatosService.obtenerListadoGatos().subscribe((resp)=>{
      this.listadoGatos = resp
      console.log(this.listadoGatos)
    })
  }

}
