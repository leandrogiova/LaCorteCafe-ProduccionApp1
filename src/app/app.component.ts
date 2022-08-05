import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Usuario } from './models/usuario';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /*
  usuarioColeccion: AngularFirestoreCollection<Usuario> | undefined;
  usuario1: Usuario = {
    nombre: 'Lea',
    apellido: 'Gio',
  }
*/ 
  constructor(private firebase: AngularFirestore){
    
  }
  
  enviar(){
    this.firebase.collection('usuarios').add({"nombre":"Agustinn", "password":"Giovacchh"}).then( () => {
      alert("Se dio de alta");
    }).catch(err => {
      console.log(err);
    })

  }
/*
  constructor(private firestore: AngularFirestore){
    this.firestore.collection('usuario').add(this.usuario1);
  }
*/

  /*
  constructor (private firestore: AngularFirestore) { 
    this.usuarioColeccion = firestore.collection('usuarios');
    console.log("usuarioColeccion:", this.usuarioColeccion);
  }
*/


/* 

  */


}
