import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/compat/firestore";
import { Observable } from "rxjs";
import { Producto } from "../models/producto";

@Injectable()
export class ProductoService {


    constructor(private firestore: AngularFirestore){
    }
    


    /*
        * enviarProductoFirebase envia un producto a la base de datos Firebase
        * Toma como argumento un producto
        * No tiene ningun tipo de retorno. 
    */
    enviarProductoFirebase(producto1: Producto) {
        this.firestore.collection('productos').add(producto1).then( () => {
            console.log("Producto enviado con exito!", producto1);
        }).catch( error => {
            console.log("Error al intentar agregar producto.\n", error);
        });
    }

    /*
        * obetenerTodosLosProductos trae la lista de todos los productos de la base de datos Firebase
        * Trae todos los 'productos'
        * ref se utiliza para ordenar la lista por numero de Producto y ascendentemente
        * No toma argumentos
        * Retorna un Objeto Observable
        */    
    obtenerTodosLosProductos(): Observable<any> {
       return this.firestore.collection('productos', ref => ref.orderBy('numeroProducto', 'asc')).snapshotChanges();
    }
}
