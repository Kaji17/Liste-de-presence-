import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../shared/model/etudiant';
import { EtudiantService } from '../shared/services/Etudiant.service';

@Component({
  selector: 'app-list-etudiant',
  templateUrl: './list-etudiant.component.html',
  styleUrls: ['./list-etudiant.component.scss']
})
export class ListEtudiantComponent implements OnInit {
  public Etudiants: Etudiant[] = []

  constructor(public etudiantService : EtudiantService) { }

  ngOnInit(): void {
    this.etudiantService.getListEtudiants().subscribe(res => {
      this.Etudiants = res.map(e =>{
        return{
          id: e.payload.doc.id,
          ...e.payload.doc.data() as{}
        }as Etudiant
      })
    })
  }

  removeEtudiant(etudiant:Etudiant){
    if(confirm("Êtes vous sure de supprimer l'étudiant: "+ etudiant.prenom)){
      this.etudiantService.deleteEtudiant(etudiant)
    }
  }

}
