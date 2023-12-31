import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { CartComponent } from './components/cart/cart.component';
import { PageConditionComponent } from './pages/page-condition/page-condition.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { ConfirmationService, MessageService } from 'primeng/api';





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
    CartComponent,
    PageConditionComponent,
    HeroSectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ConfirmPopupModule,
    ToastModule,
    MessagesModule,
    ButtonModule,
    BrowserAnimationsModule,
  ],
  providers: [ConfirmationService, MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
