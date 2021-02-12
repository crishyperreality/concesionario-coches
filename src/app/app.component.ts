import { Component, OnInit } from '@angular/core';
import { CochesService } from './coches.service';
import { Coche } from './model/coche';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'concesionario';

  coches: Coche[] = [];
  cocheSeleccionado: Coche;

  constructor(private c: CochesService) {
  }

  ngOnInit(): void {
    this.coches = this.c.getCoches();
  }


  cocheSeleccion(coche: Coche): void {
    this.cocheSeleccionado = coche;
  }

  mostrarClick(event: Event): void {
    console.log(event);
  }

}
