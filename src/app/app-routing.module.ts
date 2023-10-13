import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageConnectComponent } from './pages/page-connect/page-connect.component';
import { PageTraiteurComponent } from './pages/page-traiteur/page-traiteur.component';
import { PagePastryComponent } from './pages/page-pastry/page-pastry.component';
import { PageContactComponent } from './pages/page-contact/page-contact.component';

const routes: Routes = [
  {path: '', component: PageHomeComponent},
  {path: 'login', component: PageConnectComponent},
  {path: 'pastry', component: PagePastryComponent},
  {path: 'traiteur', component: PageTraiteurComponent},
  {path: 'contact', component: PageContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
