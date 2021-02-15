import { Coche } from "./coche";

export class Car {
    id: string;
    make: string;
    color: string;
    model: string;
    state: string;
    doors: number;
    type: string;
    engineHp: number;
    discount: boolean;
    visible: boolean;
    available: boolean;
    price: number;
    rating: number;

    static parseFromCoche(car: Coche): Car {
        const c = new Car();
        c.id = car.id;
        c.make = car.marca;
        c.model = car.modelo;
        c.discount = car.oferta;
        c.engineHp = car.potencia;
        c.price = car.precio;
        c.color = car.color;
        c.visible = car.visible;
        c.available = !car.vendido;
        c.doors = car.puertas;
        c.type = car.tipoDeCoche;
        return c;
    }
}
