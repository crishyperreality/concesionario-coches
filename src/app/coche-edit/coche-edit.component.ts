import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Coche } from '../model/coche';

@Component({
  selector: 'app-coche-edit',
  templateUrl: './coche-edit.component.html',
  styleUrls: ['./coche-edit.component.scss']
})
export class CocheEditComponent implements OnInit, OnChanges {

  cocheForm: FormGroup;

  @Input() set coche(v: Coche) {
    if (v) {
      this.loadCoche(v);
    }
  };

  constructor(private fb: FormBuilder) {
    // this.cocheForm = new FormGroup({
    //   marca: new FormControl(''),
    //   modelo: new FormControl(''),
    //   puertas: new FormControl(''),
    //   tipoDeCoche: new FormControl(''),
    //   potencia: new FormControl(''),
    //   oferta: new FormControl(''),
    //   visible: new FormControl(''),
    //   vendido: new FormControl(''),
    //   fecha: new FormControl(''),
    //   precio: new FormControl(''),
    //   color: new FormControl('')
    // });

    this.cocheForm = fb.group({
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
      puertas: [''],
      tipoDeCoche: [''],
      potencia: [''],
      oferta: [''],
      visible: [''],
      vendido: [''],
      fecha: [''],
      precio: ['', [Validators.required, Validators.min(10000)]],
      color: [''],
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
    if (this.cocheForm.invalid){
      alert('El formulario no es valido');
    } 

    console.log(this.cocheForm.value);
  }

  private loadCoche(value: Coche): void {
    console.log(value);
    this.cocheForm.patchValue(value);
    // this.cocheForm.controls.fecha.setValue('1-2-2020');
    // this.cocheForm.controls.marca.setValue(value.marca);
    // this.cocheForm.controls.modelo.setValue(value.modelo);
    // this.cocheForm.controls.puertas.setValue(value.puertas);
    // this.cocheForm.controls.tipoDeCoche.setValue(value.tipoDeCoche);
    // this.cocheForm.controls.potencia.setValue(value.potencia);
  }
}
