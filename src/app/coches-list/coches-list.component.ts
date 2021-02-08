import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Coche } from '../model/coche';

@Component({
  selector: 'app-coches-list',
  templateUrl: './coches-list.component.html',
  styleUrls: ['./coches-list.component.scss']
})
export class CochesListComponent implements OnInit {

  @Input() coches: Coche[];
  @Output() cocheSeleccionado = new EventEmitter<Coche>();

  verTabla = true;

  constructor() { }

  ngOnInit(): void {
  }

  mostrarCocheClick(coche: Coche): void {
    this.cocheSeleccionado.emit(coche);
  }

  mostrarTarjetas(): void {
    this.verTabla = false;
  }

  mostrarTabla(): void {
    this.verTabla = true;
  }
}
