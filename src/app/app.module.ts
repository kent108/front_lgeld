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
import { CardComponent } from './components/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './components/about/about.component';
import { PageInfoComponent } from './pages/page-info/page-info.component';
import { AdmintableComponent } from './components/admintable/admintable.component';
import { PageAdminComponent } from './pages/page-admin/page-admin.component';
import { ArticleEditComponent } from './components/article-edit/article-edit.component';
import { AddArticleComponent } from './components/add-article/add-article.component';
import { ArticleDetailComponent } from './components/article-detail/article-detail.component';
import { ArticleListComponent } from './components/article-list/article-list.component';




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
    CardComponent,
    AboutComponent,
    PageInfoComponent,
    AdmintableComponent,
    PageAdminComponent,
    ArticleEditComponent,
    AddArticleComponent,
    ArticleDetailComponent,
    ArticleListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
