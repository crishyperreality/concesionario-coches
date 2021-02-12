import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CochesListComponent } from './coches-list/coches-list.component';
import { CocheDetailComponent } from './coche-detail/coche-detail.component';
import { CochesTableComponent } from './coches-list/coches-table/coches-table.component';
import { CochesCardListComponent } from './coches-list/coches-card-list/coches-card-list.component';
import { HighlightDirective } from './highlight.directive';
import { HighlightAvanzadoDirective } from './highlight-avanzado.directive';
import { CocheEstadoDirective } from './coche-estado.directive';
import { CocheEditComponent } from './coche-edit/coche-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    CochesListComponent,
    CocheDetailComponent,
    CochesTableComponent,
    CochesCardListComponent,
    HighlightDirective,
    HighlightAvanzadoDirective,
    CocheEstadoDirective,
    CocheEditComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
