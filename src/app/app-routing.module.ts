import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageConnectComponent } from './pages/page-connect/page-connect.component';
import { PageTraiteurComponent } from './pages/page-traiteur/page-traiteur.component';
import { PagePastryComponent } from './pages/page-pastry/page-pastry.component';
import { PageContactComponent } from './pages/page-contact/page-contact.component';
import { PageAboutComponent } from './pages/page-about/page-about.component';
import { PageSubscribeComponent } from './pages/page-subscribe/page-subscribe.component';
import { PageInfoComponent } from './pages/page-info/page-info.component';
import { PageAdminComponent } from './pages/page-admin/page-admin.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: PageHomeComponent },
  { path: 'login', component: PageConnectComponent },
  { path: 'about', component: PageAboutComponent },
  { path: 'pastry', component: PagePastryComponent },
  { path: 'traiteur', component: PageTraiteurComponent },
  { path: 'contact', component: PageContactComponent },
  { path: 'subscribe', component: PageSubscribeComponent },
  { path: 'info', component: PageInfoComponent },
  { path: 'admin', component: PageAdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
