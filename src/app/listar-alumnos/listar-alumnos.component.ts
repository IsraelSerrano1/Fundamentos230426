import { Component } from '@angular/core';
import { Alumno } from '../_modelo/Alumno';
import { ServicioAlumnosService } from '../servicio-alumnos.service';

@Component({
  selector: 'app-listar-alumnos',
  templateUrl: './listar-alumnos.component.html',
  styleUrls: ['./listar-alumnos.component.css']
})
export class ListarAlumnosComponent {
  alumnos:Alumno[]

  constructor(private servicioAlumno: ServicioAlumnosService){

  }

  ngOnInit(){
    this.servicioAlumno.mostrar().subscribe(alumnosDevueltos => 
      {this.alumnos = alumnosDevueltos});
  }
}
