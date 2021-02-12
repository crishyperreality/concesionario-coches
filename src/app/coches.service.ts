import { Injectable } from '@angular/core';
import { Coche } from './model/coche';

@Injectable()
export class CochesService {

  constructor() { }

  getCoches(): Coche[] {

    return [{
      id: '2',
      marca: 'Mercedes',
      modelo: 'G',
      puertas: 3,
      tipoDeCoche: 'todoterreno',
      potencia: 1500,
      oferta: false,
      visible: false,
      vendido: false,
      fecha: new Date(2020, 1, 1),
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
      fecha: new Date(2020, 1, 1),
      precio: 15000,
      color: 'green'
    }, {
      id: '5',
      marca: 'Mercedes',
      modelo: 'Z',
      puertas: 3,
      tipoDeCoche: 'todoterreno',
      potencia: 3000,
      oferta: true,
      visible: true,
      vendido: false,
      fecha: new Date(2020, 1, 1),
      precio: 50000,
    }, {
      id: '6',
      marca: 'BMW',
      modelo: 'Serie 5',
      puertas: 3,
      tipoDeCoche: 'Deportivo',
      potencia: 3000,
      oferta: false,
      visible: false,
      vendido: false,
      fecha: new Date(2020, 1, 1),
      precio: 50000,
      color: 'blue'

    }, {
      id: '9',
      marca: 'SEAT',
      modelo: 'Leon',
      puertas: 3,
      tipoDeCoche: 'Familiar',
      potencia: 3000,
      oferta: false,
      visible: true,
      vendido: true,
      fecha: new Date(2020, 1, 1),
      precio: 50000,
      color: 'pink'

    }, {
      id: '8',
      marca: 'Opel',
      modelo: 'Corsa',
      puertas: 5,
      tipoDeCoche: 'Turismo',
      potencia: 3000,
      oferta: true,
      visible: false,
      vendido: false,
      fecha: new Date(2020, 1, 1),
      precio: 15000,
      color: '#CECECE'
    }, {
      id: '10',
      marca: 'Ford',
      modelo: 'Mondeo',
      puertas: 5,
      tipoDeCoche: 'Turismo',
      potencia: 3000,
      oferta: false,
      visible: false,
      vendido: false,
      fecha: new Date(2020, 1, 1),
      precio: 22000,
      color: 'orange'
    }];
  }
}