import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CocheEditComponent } from './coche-edit/coche-edit.component';
import { CochesListComponent } from './coches-list/coches-list.component';


const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'coches'
  },
  {
    path: 'coches', component: CochesListComponent
  },
  {
    path: 'coches/detalle/:id', component: CocheEditComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
