import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Coche } from '../model/coche';

@Component({
  selector: 'app-coche-detail',
  templateUrl: './coche-detail.component.html',
  styleUrls: ['./coche-detail.component.scss']
})
export class CocheDetailComponent implements OnChanges {

  _coche: Coche;
  @Input() set coche(value: Coche) {
    this._coche = { ...value };
  }
  get coche(): Coche {
    return this._coche;
  }

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.coche) {
      setInterval(() => {
        this.coche.potencia++;
      }, 1000)
    }
  }

}
