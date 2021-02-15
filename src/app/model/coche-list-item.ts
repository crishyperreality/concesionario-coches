import { Car } from "./car";

export class CocheListItem {
    id: string;
    marca: string;
    modelo: string;
    potencia: number;
    oferta: boolean;
    vendido: Boolean;
    
    constructor(item?: any) {

        this.id = item?.id || '';
        this.marca = item?.marca || '';
        this.modelo = item?.modelo || '';
        this.potencia = item?.potencia || null;
        this.oferta = item?.oferta !== null ? item?.oferta : null;
        this.vendido = item?.vendido !== null ? item?.vendido : null;
    }

    static parseFromCar(car: Car): CocheListItem {
        const c = new CocheListItem();
        c.id = car.id.toString();
        c.marca = car.make;
        c.modelo = car.model;
        c.oferta = car.discount;
        c.potencia = car.engineHp;
        c.vendido = !car.available;
        return c;
    }

}
