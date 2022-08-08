import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Producto } from '../models/producto';

@Component({
  selector: 'app-productos-principal',
  templateUrl: './productos-principal.component.html',
  styleUrls: ['./productos-principal.component.css']
})
export class ProductosPrincipalComponent implements OnInit {

  agregarProducto: FormGroup;

  constructor(private fb: FormBuilder, private firebase: AngularFirestore) {
    this.agregarProducto = this.fb.group({
      numeroProducto: '',
      nombre: '',
      precio: '',
    });

   }

  ngOnInit(): void {

  }



  enviarProducto(){
    console.log("formulario producto:", this.agregarProducto);
    let producto1: Producto;
    producto1 = this.agregarProducto.value;



    this.firebase.collection('productos').add(producto1).then( () => {
    }).catch(err => {
      console.log("Ha ocurrido un problema\n", err);
    })

  }


}
