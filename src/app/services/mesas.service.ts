import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from '@firebase/util';
import { mesaProductos } from '../models/mesaProducto';

@Injectable()
export class MesasService {

  mesaDoc:AngularFirestoreDocument<mesaProductos> | undefined;
//  mesaUnica: Observable<>;

  constructor(private firestore: AngularFirestore){
  }


  getMesas(){
    return this.firestore.collection('mesas').snapshotChanges();
  }


      /*
        * enviarProductoFirebase envia una mesa con su lista de productos a la base de datos Firebase
        * Toma como argumento una mesa
        * No tiene ningun tipo de retorno. 
    */
      enviarMesaFirebase(mesa1: any) {
        this.firestore.collection('mesas').add(mesa1).then( () => {
            console.log("Producto enviado con exito!", mesa1);
        }).catch( error => {
            console.log("Error al intentar agregar producto.\n", error);
        });
    }

    /*
    */
   traerMesaUnica(){
    let CampoUno = 'CampoUno';

    this.mesaDoc = this.firestore.doc<mesaProductos>(`mesas/${CampoUno}`);

  }


  /*
   usuarioDoc: AngularFirestoreDocument<Usuario>;
    usuarios: Observable<Usuario[]>;
    usuario: Observable<Usuario>;

     getUsuario(id: string) {
        this.usuarioDoc = this.db.doc<Usuario>(`usuarios/${id}`);
        this.usuario = this.usuarioDoc.snapshotChanges().pipe(
            map((accion) => {
                if (accion.payload.exists === false) {
                    return null as any;
                } else {
                    const datos = accion.payload.data() as Usuario;
                    datos.id = accion.payload.id;
                    return datos;
                }
            })
        );
        return this.usuario;
    }
  */

}
