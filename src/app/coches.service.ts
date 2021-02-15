import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Car } from './model/car';
import { Coche, CocheApi } from './model/coche';
import { CocheListItem } from './model/coche-list-item';

@Injectable({
  providedIn: 'root'
})
export class CochesService {

  private coches: Coche[] = [{
    id: '2',
    marca: 'Mercedes',
    modelo: 'G',
    puertas: 3,
    tipoDeCoche: 'todoterreno',
    potencia: 1500,
    oferta: false,
    visible: false,
    vendido: false,
    fecha: new Date(2020, 1, 11),
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
    fecha: new Date(2020, 5, 1),
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
    fecha: new Date(2020, 2, 1),
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
    fecha: new Date(2020, 1, 12),
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
    fecha: new Date(2021, 1, 22),
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
    fecha: new Date(2020, 7, 1),
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
    fecha: new Date(2020, 2, 1),
    precio: 22000,
    color: 'orange'
  }];


  constructor(private http: HttpClient) { }

  getCoches(): Observable<CocheListItem[]> {
    const marca = 'bmw';
    return this.http.get<Car[]>(`https://api-coches.herokuapp.com/cars?marca=${marca}`).pipe(map(x => {
      return x.map(car => {
        return CocheListItem.parseFromCar(car);
      });
    }));
  }

  getCoche(id: string): Observable<Coche> {
    return this.http.get<Car>(`https://api-coches.herokuapp.com/cars/${id}`)
      .pipe(map(car => {
        return Coche.parseFromCar(car);
      }));
  }

  guardarCoche(coche: Coche): Observable<Coche> {

    if (coche.id) {
      return this.http.put<Car>(`https://api-coches.herokuapp.com/cars/${coche.id}`, Car.parseFromCoche(coche))
        .pipe(map(car => {
          return Coche.parseFromCar(car);
        }));
    } else {
      return this.http.post<Car>('https://api-coches.herokuapp.com/cars/', Car.parseFromCoche(coche))
        .pipe(map(car => {
          return Coche.parseFromCar(car);
        }));
    }


  }

  borrarCoche(id: string): Observable<boolean> {
    return this.http.delete(`https://api-coches.herokuapp.com/cars/${id}`).pipe(map(x => {
      console.log(x);
      if (x) {
        return true;
      }
      return false;
    }))
  }

}
