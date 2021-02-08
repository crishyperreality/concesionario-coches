import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Coche } from '../model/coche';

@Component({
  selector: 'app-coches-list',
  templateUrl: './coches-list.component.html',
  styleUrls: ['./coches-list.component.scss']
})
export class CochesListComponent implements OnInit {


  cochesFiltrados: Coche[] = [];


  private _coches: Coche[] = [];

  @Input() set coches(value: Coche[]) {    
    this._coches = value;
    this.filtrarCoches();
  }

  get coches(): Coche[] {
    return this._coches;
  }

  @Output() cocheSeleccionado = new EventEmitter<Coche>();

  verTabla = true;
  soloVendidos = false;
  soloVendidosLabel = 'Mostrar solo vendidos';

  constructor() { }

  // ngOnChanges(changes: SimpleChanges): void {
  //   if (changes.coches) {
  //     console.log('set coches ngOnChanges');
  //     this.filtrarCoches();
  //   }
  // }

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

  mostrarOcultarVendidos() {
    this.soloVendidos = !this.soloVendidos;
    this.filtrarCoches();
  }

  private filtrarCoches(): void {
    if (this.soloVendidos) {
      this.cochesFiltrados = this.coches.filter(c => c.vendido);
      this.soloVendidosLabel = 'Mostrar todos';
    } else {
      this.cochesFiltrados = this.coches;
      this.soloVendidosLabel = 'Mostrar solo vendidos';
    }

    // this.cochesFiltrados = this.soloVendidos ? this.coches.filter(c => c.vendido) : this.coches;
    // this.soloVendidosLabel = this.soloVendidos ? 'Mostrar todos' : 'Mostrar solo vendidos';
  }
}
