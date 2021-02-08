import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CochesListComponent } from './coches-list/coches-list.component';
import { CocheDetailComponent } from './coche-detail/coche-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CochesListComponent,
    CocheDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
