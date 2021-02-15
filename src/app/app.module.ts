import { registerLocaleData } from '@angular/common';
import localeEsp from '@angular/common/locales/es';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CocheDetailComponent } from './coche-detail/coche-detail.component';
import { CocheEditComponent } from './coche-edit/coche-edit.component';
import { CocheEstadoDirective } from './coche-estado.directive';
import { CochesCardListComponent } from './coches-list/coches-card-list/coches-card-list.component';
import { CochesListComponent } from './coches-list/coches-list.component';
import { CochesTableComponent } from './coches-list/coches-table/coches-table.component';
import { CochesService } from './coches.service';
import { HighlightAvanzadoDirective } from './highlight-avanzado.directive';
import { HighlightDirective } from './highlight.directive';
import { LoginComponent } from './login/login.component';
import { PotenciaPipe } from './potencia.pipe';
import { AppRoutingModule } from './app-routing.module';

registerLocaleData(localeEsp);

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
    LoginComponent,
    PotenciaPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [CochesService,
    { provide: LOCALE_ID, useValue: 'es' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'EUR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
