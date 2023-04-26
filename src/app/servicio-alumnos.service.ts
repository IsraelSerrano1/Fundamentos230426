import { Injectable } from '@angular/core';
import { Alumno } from './_modelo/Alumno';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioAlumnosService {
  alumnos: Alumno[]=[
    {id:1, dni:"123456789",nombre:"Juan", horas_formacion:380}, 
    {id:2, dni:"987654321",nombre:"Hector", horas_formacion:500},
    {id:3, dni:"567234934",nombre:"Ernesto", horas_formacion:2000}
  ]
  

  constructor() { }

  mostrar(): Observable <Alumno[]>{
    return of(this.alumnos);
  }

  buscar(idBuscado: number): Observable <Alumno>{
    let alumno = this.alumnos.find(alumno => alumno.id == idBuscado)
     return of (alumno ? alumno:{id:0, dni:"",nombre:"", horas_formacion:0})
  }

  addAlumno(newAlumno: Alumno){
    let index = this.alumnos.findIndex((alumnos) => alumnos.id == newAlumno.id);   
    if(index != -1){      
    this.alumnos[index] = newAlumno;    
    } else{
      let index2 = this.alumnos.length +1;
      newAlumno.id= index2++;
      this.alumnos.push(newAlumno);      
    }
    
  }

}



