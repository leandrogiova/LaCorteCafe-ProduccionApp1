import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { MesasPrincipalComponent } from './mesas-principal/mesas-principal.component';
import { ProductosPrincipalComponent } from './productos-principal/productos-principal.component';
import { ProductoService } from './services/producto-service';
import { MesasService } from './services/mesas.service';



@NgModule({
  declarations: [
    AppComponent,
    MesasPrincipalComponent,
    ProductosPrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ProductoService, MesasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
