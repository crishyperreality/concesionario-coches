import { Component } from '@angular/core';
import { Coche } from './model/coche';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'concesionario';

  coches: Coche[] = [];
  cocheSeleccionado: Coche;

  constructor() {
    this.cargarCoches();
  }

  cocheSeleccion(coche: Coche): void {
    this.cocheSeleccionado = coche;
  }

  mostrarClick(event: Event): void {
    console.log(event);
  }

  private cargarCoches(): void {

    this.coches = [{
      id: '2',
      marca: 'Mercedes',
      modelo: 'G',
      puertas: 3,
      tipoDeCoche: 'todoterreno',
      potencia: 1500,
      oferta: false,
      visible: false,
      vendido: false,
      fecha: '2021/01/10',
      precio: 35000,
    },
    {
      id: '3',
      marca: 'Toyota',
      modelo: 'Auris',
      puertas: 5,
      tipoDeCoche: 'familiar',
      potencia: 1400,
      oferta: false,
      visible: false,
      vendido: false,
      fecha: '2021-01-11',
      precio: 15000
    }];

    this.coches.push({
      id: '1',
      marca: 'Mercedes',
      modelo: 'Z',
      puertas: 3,
      tipoDeCoche: 'todoterreno',
      potencia: 3000,
      oferta: false,
      visible: false,
      vendido: false,
      fecha: '2021/01/10',
      precio: 50000,

    });
  }


}
