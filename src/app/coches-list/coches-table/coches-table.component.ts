import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Coche } from 'src/app/model/coche';

@Component({
  selector: 'app-coches-table',
  templateUrl: './coches-table.component.html',
  styleUrls: ['./coches-table.component.scss']
})
export class CochesTableComponent implements OnInit {

  @Input() coches: Coche[];
  @Output() cocheSeleccionado = new EventEmitter<Coche>();

  constructor() { }

  ngOnInit(): void {
  }
}
