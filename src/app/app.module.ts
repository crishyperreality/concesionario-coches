import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CochesListComponent } from './coches-list/coches-list.component';
import { CocheDetailComponent } from './coche-detail/coche-detail.component';
import { CochesTableComponent } from './coches-list/coches-table/coches-table.component';
import { CochesCardListComponent } from './coches-list/coches-card-list/coches-card-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CochesListComponent,
    CocheDetailComponent,
    CochesTableComponent,
    CochesCardListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
