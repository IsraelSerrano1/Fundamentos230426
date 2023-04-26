import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Alumno } from '../_modelo/Alumno';
import { ActivatedRoute } from '@angular/router';
import { ServicioAlumnosService } from '../servicio-alumnos.service';

@Component({
  selector: 'app-form-reactivo',
  templateUrl: './form-reactivo.component.html',
  styleUrls: ['./form-reactivo.component.css']
})
export class FormReactivoComponent {
  form: FormGroup;
  alumno: Alumno;
  
  constructor(private activarRutas: ActivatedRoute, private servicioAlumnos:ServicioAlumnosService){
  }


  ngOnInit(){      
    let idAux;
    this.activarRutas.params.subscribe(datos => {
      idAux = datos['id'];
      this.servicioAlumnos.buscar(idAux).subscribe(datos2 => {
        this.alumno = datos2
        this.form = new FormGroup({
          id: new FormControl(this.alumno.id),
          dni: new FormControl(this.alumno.dni),
          nombre: new FormControl(this.alumno.nombre),
          horas_formacion: new FormControl(this.alumno.horas_formacion)
        });      
      });      
    });

  }
  add() {
    this.alumno=this.form.value
    this.servicioAlumnos.addAlumno(this.alumno);
  }

  funciona(){
    alert("El boton enviar Funciona");
  }
  
}
