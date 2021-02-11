import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Coche } from '../model/coche';

@Component({
  selector: 'app-coche-edit',
  templateUrl: './coche-edit.component.html',
  styleUrls: ['./coche-edit.component.scss']
})
export class CocheEditComponent implements OnInit, OnChanges {

  cocheForm: FormGroup;

  @Input() set coche(v: Coche) {
    if (v){
      this.loadCoche(v);
    }
  };

  constructor() {
    this.cocheForm = new FormGroup({
      marca2: new FormControl(''),
      modelo: new FormControl(''),
      puertas: new FormControl(''),
      tipoDeCoche: new FormControl(''),
      potencia: new FormControl('')
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    // if (changes.coche) {
    //   this.loadCoche(changes.coche.currentValue);
    // }
  }

  ngOnInit(): void {

  }

  grabar(): void {
    console.log(this.cocheForm.value);
  }

  private loadCoche(value: Coche): void{
    this.cocheForm.patchValue(value);
    // this.cocheForm.controls.marca.setValue(value.marca);
    // this.cocheForm.controls.modelo.setValue(value.modelo);
    // this.cocheForm.controls.puertas.setValue(value.puertas);
    // this.cocheForm.controls.tipoDeCoche.setValue(value.tipoDeCoche);
    // this.cocheForm.controls.potencia.setValue(value.potencia);
  }
}
