import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-coche-edit',
  templateUrl: './coche-edit.component.html',
  styleUrls: ['./coche-edit.component.scss']
})
export class CocheEditComponent implements OnInit {

  cocheForm: FormGroup;

  constructor() {
    this.cocheForm = new FormGroup({
      marca: new FormControl(''),
      modelo: new FormControl(''),
      puertas: new FormControl(''),
      tipoDeCoche: new FormControl(''),
      potencia: new FormControl('')
    });
  }

  ngOnInit(): void {
    this.cocheForm.controls.marca.setValue('SEAT');
  }

  grabar(): void {
    console.log(this.cocheForm.value);
  }
}
