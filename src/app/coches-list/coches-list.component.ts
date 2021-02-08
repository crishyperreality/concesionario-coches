import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Coche } from '../model/coche';

@Component({
  selector: 'app-coches-list',
  templateUrl: './coches-list.component.html',
  styleUrls: ['./coches-list.component.scss']
})
export class CochesListComponent implements OnInit, OnChanges {


  cochesFiltrados: Coche[] = [];

  @Input() coches: Coche[];
  @Output() cocheSeleccionado = new EventEmitter<Coche>();

  verTabla = true;
  soloVendidos = false;
  soloVendidosLabel = 'Mostrar solo vendidos';

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.coches) {    
      this.filtrarCoches();
    }
  }

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
