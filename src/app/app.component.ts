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
      color: 'red'
    },
    {
      id: '4',
      marca: 'Toyota',
      modelo: 'Auris',
      puertas: 5,
      tipoDeCoche: 'familiar',
      potencia: 1400,
      oferta: false,
      visible: true,
      vendido: false,
      fecha: '2021-01-11',
      precio: 15000,
      color: 'green'
    }];

    this.coches.push({
      id: '5',
      marca: 'Mercedes',
      modelo: 'Z',
      puertas: 3,
      tipoDeCoche: 'todoterreno',
      potencia: 3000,
      oferta: false,
      visible: true,
      vendido: false,
      fecha: '2021/01/10',
      precio: 50000,
    });
    this.coches.push({
      id: '6',
      marca: 'BMW',
      modelo: 'Serie 5',
      puertas: 3,
      tipoDeCoche: 'Deportivo',
      potencia: 3000,
      oferta: false,
      visible: false,
      vendido: false,
      fecha: '2021/01/10',
      precio: 50000,
      color: 'blue'

    });
    this.coches.push({
      id: '9',
      marca: 'SEAT',
      modelo: 'Leon',
      puertas: 3,
      tipoDeCoche: 'Familiar',
      potencia: 3000,
      oferta: false,
      visible: true,
      vendido: true,
      fecha: '2021/01/10',
      precio: 50000,
      color: 'pink'

    });
    this.coches.push({
      id: '8',
      marca: 'Opel',
      modelo: 'Corsa',
      puertas: 5,
      tipoDeCoche: 'Turismo',
      potencia: 3000,
      oferta: false,
      visible: false,
      vendido: false,
      fecha: '2021/01/10',
      precio: 15000,
      color: ''
    });
    this.coches.push({
      id: '10',
      marca: 'Ford',
      modelo: 'Mondeo',
      puertas: 5,
      tipoDeCoche: 'Turismo',
      potencia: 3000,
      oferta: false,
      visible: false,
      vendido: false,
      fecha: '2021/01/10',
      precio: 22000,
      color: 'orange'
    });
  }


}
