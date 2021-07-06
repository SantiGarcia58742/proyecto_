import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ReactiveFormsModule } from '@angular/forms'

// Componentes Angular Material
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCard, MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';

import { RegistrarComponent } from './core/auth/registrar/registrar.component';
import { CursoComponent } from './modules/alumnos/home/curso/curso.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { CardComponent } from './shared/components/card/card.component';
import { AnuncioComponent } from './shared/components/anuncio/anuncio.component';
import { dialogAnuncio } from './shared/components/content-anuncio/content-dialog.component';
import { MateriaComponent } from './modules/alumnos/materia/materia.component';
import { LoginComponent } from './core/auth/login/login.component';
import { TareaComponent } from './modules/alumnos/tarea/tarea.component';
import { CardTareasComponent } from './shared/components/card-tareas/card-tareas.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrarComponent,
    CursoComponent,
    NavbarComponent,
    CardComponent,
    AnuncioComponent,
    dialogAnuncio,
    MateriaComponent,
    LoginComponent,
    TareaComponent,
    CardTareasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
