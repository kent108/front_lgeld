import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { BlockquoteComponent } from './components/blockquote/blockquote.component';
import { ButtonPageHomeComponent } from './components/button-page-home/button-page-home.component';
import { PageContactComponent } from './pages/page-contact/page-contact.component';
import { PagePastryComponent } from './pages/page-pastry/page-pastry.component';
import { PageTraiteurComponent } from './pages/page-traiteur/page-traiteur.component';
import { PageConnectComponent } from './pages/page-connect/page-connect.component';
import { PageAboutComponent } from './pages/page-about/page-about.component';
import { PageSubscribeComponent } from './pages/page-subscribe/page-subscribe.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CarouselComponent,
    PageHomeComponent,
    BlockquoteComponent,
    ButtonPageHomeComponent,
    PageContactComponent,
    PagePastryComponent,
    PageTraiteurComponent,
    PageConnectComponent,
    PageAboutComponent,
    PageSubscribeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
