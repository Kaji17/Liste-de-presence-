import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { ListEtudiantComponent } from './list-etudiant/list-etudiant.component';

const routes: Routes = [
  {path : "inscription", component: EtudiantComponent},
  {path : "list-etudiant", component: ListEtudiantComponent},
  {path : "", redirectTo: "/inscription", pathMatch: 'full'},
  {path : "**", redirectTo: "/inscription", pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
