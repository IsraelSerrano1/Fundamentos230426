import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormReactivoComponent } from './form-reactivo/form-reactivo.component';
import { ListarAlumnosComponent } from './listar-alumnos/listar-alumnos.component';

const routes: Routes = [
  {path:'', component: ListarAlumnosComponent,children:[
    {path:'alta', component:FormReactivoComponent},
    {path: 'modificar/:id', component:FormReactivoComponent}
  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
