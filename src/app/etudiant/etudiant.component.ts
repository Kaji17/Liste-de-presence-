import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EtudiantService } from '../shared/services/Etudiant.service';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.scss']
})
export class EtudiantComponent implements OnInit {

  public etudiantForm: any;

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
      date: [new Date()]
      
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.etudiantService.createEtudiant(this.etudiantForm.value);
    this.router.navigate(['list-etudiant'])
  }
}
