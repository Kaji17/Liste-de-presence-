import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EtudiantService } from '../shared/services/Etudiant.service';
import { Etudiant } from '../shared/services/model/etudiant';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.scss']
})
export class EtudiantComponent implements OnInit {

  public etudiantForm: any;
  public Etudiants!: Etudiant[] ;

  constructor(
    public etudiantService : EtudiantService,
    public formBuilder: FormBuilder,
    public router : Router
  ) { 
    this.etudiantForm = this.formBuilder.group({
      nom : [''],
      prenom: [''],
      numeroTel: [''],
      email: [''],  
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.etudiantService.createEtudiant(this.etudiantForm.value);
    this.etudiantService.getListEtudiants().subscribe(res => {
      this.Etudiants = res.map(e =>{
        return{
          id: e.payload.doc.id,
          ...e.payload.doc.data() as{}
        }as Etudiant
      })
    })
    this.router.navigate(['list-etudiant'])
  }
}
