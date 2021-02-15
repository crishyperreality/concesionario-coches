import { Component, OnInit } from '@angular/core';
import { CochesService } from './coches.service';
import { Coche } from './model/coche';
import { CocheListItem } from './model/coche-list-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'concesionario';

  coches: CocheListItem[] = [];
  cocheSeleccionado: Coche;

  constructor(private cochesService: CochesService) {
  }

  ngOnInit(): void {
  }


  cocheSeleccion(coche: CocheListItem): void {
    this.cochesService.getCoche(coche.id).subscribe(c => {
      if (c) {
        this.cocheSeleccionado = c;
      }
    })
  }

  mostrarClick(event: Event): void {
    console.log(event);
  }

  guardarCoche(coche: Coche): void {
    this.cochesService.guardarCoche(coche).subscribe(cocheGuardado => {
      if (cocheGuardado) {
        this.cocheSeleccionado = cocheGuardado;
      }
      // this.loadCoches();
    });
  }

 

}
