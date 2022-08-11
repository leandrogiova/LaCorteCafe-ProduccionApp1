import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/compat/firestore";
import { Observable } from "rxjs";
import { Producto } from "../models/producto";

@Injectable()
export class ProductoService {


    constructor(private firestore: AngularFirestore){
       
    }
    
    enviarProductoFirebase(producto1: Producto) {
        this.firestore.collection('productos').add(producto1).then( () => {
            console.log("Producto enviado con exito!", producto1);
        }).catch( error => {
            console.log("Error al intentar agregar producto.\n", error);
        });
    }

    obtenerTodosLosProductos(): Observable<any> {
        return this.firestore.collection('productos').snapshotChanges();
    }


}
