import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Etudiant } from "../model/etudiant";

@Injectable({
  providedIn: "root"
})

export class EtudiantService {

  constructor(private angularFirestore: AngularFirestore) { }

  etudiantForm = new FormGroup({
    id: new FormControl(null),
    nom: new FormControl("", Validators.required),
    prenom: new FormControl("", Validators.required),
    numeroTel: new FormControl("", [Validators.required, Validators.minLength(8)]),
    email: new FormControl("", Validators.email),
    
  })

  //liste des étudiants
  getListEtudiants() {
    return this.angularFirestore
      .collection("etudiant")
      .snapshotChanges();
  }

  //Ajout d'un nouvelle étudiant
  createEtudiant(etudiant: Etudiant) {
    return new Promise<any>((resolve, reject) => {
      this.angularFirestore
        .collection("etudiant")
        .add(etudiant)
        .then(respons => { console.log('etudiant :'+etudiant.nom+respons) }, error => reject(error))
    })
  };

  //Supprimer un étudiant de la liste de présence
  deleteEtudiant(etudiant: Etudiant) {
    return this.angularFirestore
      .collection("etudiant")
      .doc(etudiant.id)
      .delete()
  }

  //Modifier un étudiant de la liste de présence
  updateEtudiant(etudiant: Etudiant) {
    return this.angularFirestore
      .collection("etudiant")
      .doc(etudiant.id)
      .update({
        nom: etudiant.nom,
        prenom: etudiant.prenom,
        numeroTel: etudiant.numeroTel,
        email: etudiant.email
      })
  }
}