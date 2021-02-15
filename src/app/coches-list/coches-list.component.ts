import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CochesService } from '../coches.service';
import { Coche } from '../model/coche';
import { CocheListItem } from '../model/coche-list-item';

@Component({
  selector: 'app-coches-list',
  templateUrl: './coches-list.component.html',
  styleUrls: ['./coches-list.component.scss']
})
export class CochesListComponent implements OnInit {


  cochesFiltrados: CocheListItem[] = [];
  private _coches: CocheListItem[] = [];

  @Input() set coches(value: CocheListItem[]) {
    this._coches = value;
    this.filtrarCoches();
  }

  get coches(): CocheListItem[] {
    return this._coches;
  }

  @Output() cocheSeleccionado = new EventEmitter<CocheListItem>();
 

  verTabla = true;
  soloVendidos = false;
  soloVendidosLabel = 'Mostrar solo vendidos';

  constructor(private cochesService: CochesService, private router: Router) { }

  ngOnInit(): void {
    this.loadCoches();
  }

  mostrarCocheClick(coche: Coche): void {
    this.router.navigate(['coches/detalle', coche.id ]);
    // this.cocheSeleccionado.emit(coche);
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

  borrarCoche(coche: CocheListItem): void {
    this.cochesService.borrarCoche(coche.id).subscribe(cocheBorrado => {
      if (cocheBorrado){
        alert('Coche Borrado');
      }    
      this.loadCoches();
    });
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

  private loadCoches(): void {
    this.cochesService.getCoches().subscribe(coches => {
      if (coches) {
        this.coches = coches;
      }
    });
  }
}
