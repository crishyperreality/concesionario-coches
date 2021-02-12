import { NullTemplateVisitor } from "@angular/compiler";

export class Coche {
    id: string;
    marca: string;
    modelo: string;
    puertas: number;
    tipoDeCoche: string;
    potencia: number;
    oferta: boolean;
    visible: boolean;
    vendido: Boolean;
    fecha: Date;
    precio: number;
    color?: string = '';

    constructor(item?: any) {

        this.id = item?.id || '';
        this.marca = item?.marca || '';
        this.modelo = item?.modelo || '';
        this.puertas = item?.puertas || null;
        this.tipoDeCoche = item?.tipoDeCoche || '';
        this.potencia = item?.potencia || null;
        this.oferta = item?.oferta && item?.oferta !== null ? item.oferta : null;
        this.visible = item?.visible && item?.visible !== null ? item.visible : null;
        this.vendido = item?.vendido && item?.vendido !== null ? item.vendido : null;
        this.fecha = item?.fecha ? new Date(item?.fecha) : null;
        this.precio= item?.precio || null;
        this.color = item?.color || null;
    }

}​​​​
