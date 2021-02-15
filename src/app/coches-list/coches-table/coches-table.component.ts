import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Coche } from 'src/app/model/coche';
import { CocheListItem } from 'src/app/model/coche-list-item';

@Component({
  selector: 'app-coches-table',
  templateUrl: './coches-table.component.html',
  styleUrls: ['./coches-table.component.scss']
})
export class CochesTableComponent implements OnInit {

  @Input() coches: CocheListItem[];
  @Output() cocheSeleccionado = new EventEmitter<Coche>();

  cont = 0;

  constructor() { }

  ngOnInit(): void {
  }

  seleccionClick(event: CocheListItem): void {
    event.vendido = !event.vendido;
    //  alert(`Se ha seleccionado el coche ${event.modelo}`);
  }

  getPotencia(potencia: number): string {
    // this.cont++;
    // console.log(this.cont)
    return potencia + ' cv';
  }
}
