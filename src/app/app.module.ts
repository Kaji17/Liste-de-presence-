import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Module Firestore
import { AngularFirestoreModule } from '@angular/fire/compat/firestore/';
import { AngularFireModule } from '@angular/fire/compat';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListEtudiantComponent } from './list-etudiant/list-etudiant.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { EtudiantService } from './shared/services/Etudiant.service';

@NgModule({
  declarations: [
    AppComponent,
    ListEtudiantComponent,
    EtudiantComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [EtudiantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
