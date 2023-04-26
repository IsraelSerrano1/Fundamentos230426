import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormReactivoComponent } from './form-reactivo/form-reactivo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListarAlumnosComponent } from './listar-alumnos/listar-alumnos.component';

@NgModule({
  declarations: [
    AppComponent,
    FormReactivoComponent,
    ListarAlumnosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
