import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-ejemplo4',
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './ejemplo4.component.html',
  styleUrl: './ejemplo4.component.css'
})
export class Ejemplo4Component {
  title = 'ejemplo4';


  //propiedades
  listaTareas: string[];
  tarea = new FormControl();

  constructor(){
    this.listaTareas = [];
    if (typeof localStorage !== 'undefined') {
      let datos = localStorage.getItem('tareas');
      if(datos != null){
        let arreglo = JSON.parse(datos);
        if(arreglo != null){
          for(let tarea of arreglo){
            this.listaTareas.push(tarea);
          }
        }
      }
    }
  }

  agregarTarea(){
    this.listaTareas.push(this.tarea.value);
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('tareas', JSON.stringify(this.listaTareas));
    }
    this.tarea.setValue('');
  }

  borrarTarea(posicion:number){
    this.listaTareas.splice(posicion, 1);
    if (typeof localStorage !== 'undefined') {
      localStorage.clear();
      localStorage.setItem('tareas', JSON.stringify(this.listaTareas));
    }
  } 

  borrarTareas(){
    if (typeof localStorage !== 'undefined') {
      localStorage.clear();
    }
    this.listaTareas = [];
  }
}
