import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejemplo3',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './ejemplo3.component.html',
  styleUrl: './ejemplo3.component.css'
})
export class Ejemplo3Component {
  title = 'ejemplo3';

  //propiedades

  producto = {
    id:0,
    descripcion:'',
    precio: 0

  };

  productos = [
    {id :1, descripcion: 'Sabritas', precio: 18},
    {id :2, descripcion: 'Cocacola', precio: 17},
    {id :3, descripcion: 'Donas', precio: 24.40},
    {id :4, descripcion: 'Charola', precio: 120},
    {id :5, descripcion: 'Taco de sal', precio: 1.50},
  ];

  // funcion para agregar un producto al arreglo

  agregarProducto(){
    //validamos si el producto tiene id
    if(this.producto.id ==0){
      alert('El id debe ser diferente de cero');
      return
    }

    //verifficamos que el id no este repetido
    for(let i=0; i<this.productos.length; i++){
      if(this.producto.id == this.productos[i].id){
        alert('El id ya existe');
        return;
      }
    }

    //agregamos el producto al arreglo

    this.productos.push({
      id: this.producto.id,
      descripcion: this.producto.descripcion,
      precio: this.producto.precio
    });

    //reiniciamos el producto a sus valores iniciales
    this.producto.id = 0;
    this.producto.descripcion = '';
    this.producto.precio = 0;
  }

  //funcion para seleccionar un producto existente
  seleccionarProducto(productoSeleccionado:{id:number;descripcion:string;precio:number}) {

    this.producto.id = productoSeleccionado.id;
    this.producto.descripcion = productoSeleccionado.descripcion;
    this.producto.precio = productoSeleccionado.precio;


  }

  //funcion para modificar el producto
  modificarProducto(){
    for(let i=0; i<this.productos.length; i++){
      if(this.producto.id == this.productos[i].id){
        this.productos[i].descripcion = this.producto.descripcion;
        this.productos[i].precio = this.producto.precio;
        

        //reiniciamos el producto a sus valores iniciales
        this.producto.id = 0;
        this.producto.descripcion = '';
        this.producto.precio = 0;
        return;

      }
    }

    alert('El id no existe');
  }

  //funcion para eliminar un producto
  eliminarProducto(id:number){
    for(let i=0; i<this.productos.length; i++){
      if(id == this.productos[i].id){
        this.productos.splice(i,1);
        return;
        
      }
    }

    alert('El id no existe');
  }
}
