import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr'

// Module Firestore
import { AngularFirestoreModule } from '@angular/fire/compat/firestore/';
import { AngularFireModule } from '@angular/fire/compat';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListEtudiantComponent } from './list-etudiant/list-etudiant.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { EtudiantService } from './shared/services/Etudiant.service';

@NgModule({
  declarations: [
    AppComponent,
    ListEtudiantComponent,
    EtudiantComponent,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,

    FormsModule
  ],
  providers: [EtudiantService, {provide: LOCALE_ID, useValue: 'fr-Fr'}],
  bootstrap: [AppComponent]
})
export class AppModule {
  contructor(){
    registerLocaleData(fr.default)
  }
 }

