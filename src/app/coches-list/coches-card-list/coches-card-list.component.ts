import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CocheListItem } from 'src/app/model/coche-list-item';


@Component({
  selector: 'app-coches-card-list',
  templateUrl: './coches-card-list.component.html',
  styleUrls: ['./coches-card-list.component.scss']
})
export class CochesCardListComponent implements OnInit {

  @Input() coches: CocheListItem[];
  @Output() cocheSeleccionado = new EventEmitter<CocheListItem>();

  constructor() { }

  ngOnInit(): void {
  }

  mostarCocheClick(coche: CocheListItem): void {
    this.cocheSeleccionado.emit(coche);
  }

}
