import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Producto } from '../models/producto';
import { ProductoService } from '../services/producto-service';


@Component({
  selector: 'app-productos-principal',
  templateUrl: './productos-principal.component.html',
  styleUrls: ['./productos-principal.component.css']
})
export class ProductosPrincipalComponent implements OnInit {
  
  agregarProducto: FormGroup;
  verListaProductos: boolean;
  productos: Producto[];


  constructor(private fb: FormBuilder, private productoService: ProductoService) {
    this.agregarProducto = this.fb.group({
      numeroProducto: ['', [Validators.required, ]],//el numero de producto no se puede repetir
      nombre: ['', Validators.required],
      precio: ['', Validators.required],
    });

    this.verListaProductos = false;
    this.productos = [];

  }

  ngOnInit(): void {
  }


  /*
    * enviarProducto envia un producto a la base de datos Firebase
    * Inicializa una variable producto1 a traves del formulario 'agregarProducto'
    * No recibe parametros. 
    * No tiene ningun tipo de retorno.
  */
  enviarProducto(){
    let producto1: Producto;
    producto1 = this.agregarProducto.value;
    this.productoService.enviarProductoFirebase(producto1);
    this.agregarProducto = this.fb.group({
      numeroProducto: ['', [Validators.required, ]],//el numero de producto no se puede repetir
      nombre: ['', Validators.required],
      precio: ['', Validators.required],
    });
  }



  /*
    * verLosProductos trae todos los productos de la base de datos
    * Al inicio inicializa el array de productos 'productos' para que no halla una copia de los datos.
    * Tambien pone en true la variable 'verListaProductos' para que se visualize en el html la lista
    * Luego llama al servicio 'productoService' para obtener todos los productos de la base de datos.
    * Inserta cada uno de los objetos que trae en el array 'productos'
    * No toma argumentos
    * No tiene ningun tipo de retorno.
  */
   verLosProductos(){
    this.verListaProductos = !this.verListaProductos;
    this.productos = [];
    this.productoService.obtenerTodosLosProductos().subscribe( doc => {
      doc.forEach( (element: any) => {
        this.productos.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        });
      });
    });
   }









}
