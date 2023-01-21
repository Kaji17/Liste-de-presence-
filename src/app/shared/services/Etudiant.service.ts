import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";

@Injectable({
  providedIn:"root"
})

export class EtudiantService{

  constructor(private angularFirestore: AngularFirestore){}

  getEtudiantDoc(id: string | undefined){
    return this.angularFirestore
    .collection('etudiant-collection')
    .doc(id)
    .valueChanges()
  }
}
