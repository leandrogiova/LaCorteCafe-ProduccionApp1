import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

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
    this.productoService.obtenerTodosLosProductos().subscribe(data => {
      console.log("metodo verListaProducto:\n", data);
    });
  }


  /*
  */
  enviarProducto(){

    let producto1: Producto;
    producto1 = this.agregarProducto.value;
    console.log("producto1:", producto1);
    this.productoService.enviarProductoFirebase(producto1);
  

  }


  /*
  */
  VerListaProducto(){
    this.productoService.obtenerTodosLosProductos().subscribe(data => {
      console.log("metodo verListaProducto:\n");
      const datos = data.payload.doc.id;
      console.log(datos);
      /*
      data.forEach((element:any) => {
        console.log(element.payload.doc.data() );        
      });
*/

    });

  }





}
