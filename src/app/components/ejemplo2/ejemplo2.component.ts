import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; 
import { DadoComponent } from '../../dado/dado.component';


@Component({
  selector: 'app-ejemplo2',
  standalone: true,
  imports: [RouterOutlet, DadoComponent],
  templateUrl: './ejemplo2.component.html',
  styleUrl: './ejemplo2.component.css'
})
export class Ejemplo2Component {
  title = 'Ejemplo2';
  //Propiedades.
  resultado:string = '';
  valor1:number = this.generarAleatorio();
  valor2:number = this.generarAleatorio();
  valor3:number = this.generarAleatorio();

  //Método que generaun número aleatorio entre 1 y 6
  generarAleatorio(){
    return Math.floor(Math.random() * 6) + 1;
  }

  //Función que hace la tirada y verifica el resultado.
  tirarDados(){
    this.valor1 = this.generarAleatorio();
    this.valor2 = this.generarAleatorio();
    this.valor3 = this.generarAleatorio();

    //Comparamos si los 3 son iguales.
    if(this.valor1 == this.valor2 && this.valor1 == this.valor3) {
      this.resultado = 'MUY BIEN GANASTE!!!!';
    } else{
      this.resultado = 'Sigue intentando';
    }
  }
}
