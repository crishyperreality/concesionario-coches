import { formatDate } from '@angular/common';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CochesService } from '../coches.service';
import { Coche } from '../model/coche';

@Component({
  selector: 'app-coche-edit',
  templateUrl: './coche-edit.component.html',
  styleUrls: ['./coche-edit.component.scss']
})
export class CocheEditComponent implements OnInit, OnDestroy {

  cocheForm: FormGroup;
  submitted = false;

  @Input() set coche(v: Coche) {
    if (v) {
      this.loadCoche(v);
    }
  };

  subscriptions: Subscription[] = []

  constructor(fb: FormBuilder, private cochesService: CochesService,
    private route: ActivatedRoute,
    private router: Router) {
    this.cocheForm = fb.group({
      id: [''],
      marca: ['', [Validators.required, this.marcaNoValida]],
      modelo: ['', [Validators.required, Validators.minLength(5)]],
      puertas: [''],
      tipoDeCoche: [''],
      potencia: [''],
      oferta: [null],
      visible: [null],
      vendido: [null],
      fecha: [''],
      precio: ['', [Validators.required, Validators.min(10000)]],
      color: [''],
    });
  }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      if (params.id) {
        this.cochesService.getCoche(params.id).subscribe(coche => {
          if (coche) {
            this.loadCoche(coche);
          }
        });
      }
    })


    this.subscriptions.push(this.cocheForm.controls.marca.valueChanges.subscribe((x: string) => {
      if (x) {
        if (x.toLowerCase().includes('toyota')) {
          this.cocheForm.controls.modelo.setValue('Corolla');
        }
      }
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  grabar(): void {
    this.submitted = true;

    if (this.cocheForm.valid) {
      // hago lo que tenga que hacer
      const c = new Coche(this.cocheForm.value);

      this.cochesService.guardarCoche(c).subscribe(cocheGuardado => {
        if (cocheGuardado) {
          alert('Coche guardado');
          this.router.navigate(['coches']);
        }
      });    
    }
  }

  limpiar(): void {
    this.submitted = false;
    this.cocheForm.reset();
  }

  marcaNoValida(control: FormControl): { [s: string]: boolean } {

    const marcasNoValidas = ['bmw', 'opel'];

    if (marcasNoValidas.includes(control.value?.toLowerCase())) {
      return {
        marcaNoValida: true
      };
    }
  }

  private loadCoche(value: Coche): void {
    this.cocheForm.patchValue(value);
    this.cocheForm.controls.fecha.setValue(formatDate(value.fecha, 'yyyy-MM-dd', 'es'));
    // this.cocheForm.controls.fecha.setValue('1-2-2020');
    // this.cocheForm.controls.marca.setValue(value.marca);
    // this.cocheForm.controls.modelo.setValue(value.modelo);
    // this.cocheForm.controls.puertas.setValue(value.puertas);
    // this.cocheForm.controls.tipoDeCoche.setValue(value.tipoDeCoche);
    // this.cocheForm.controls.potencia.setValue(value.potencia);
  }
}
