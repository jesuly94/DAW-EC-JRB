import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiComponente } from './components/mi-componente/mi-componente.component';
import { MiSegundoComponente } from './components/mi-componente/mi-segundocomponente.componente';

@NgModule({
  declarations: [
    AppComponent,
    MiComponente,
    MiSegundoComponente
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
