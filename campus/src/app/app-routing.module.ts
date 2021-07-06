import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursoComponent } from './modules/alumnos/home/curso/curso.component';
import { RegistrarComponent } from './core/auth/registrar/registrar.component';
import { MateriaComponent } from './modules/alumnos/materia/materia.component';
import { LoginComponent } from './core/auth/login/login.component';
import { TareaComponent } from './modules/alumnos/tarea/tarea.component';

const routes: Routes = [
  {path:"", component:LoginComponent},
  {path:"registrar", component:RegistrarComponent},
  {path:"curso", component:CursoComponent},
  {path:"curso/:nombre", component:MateriaComponent},
  {path:"curso/:nombre/:id", component:TareaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
