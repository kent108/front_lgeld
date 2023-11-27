import { Injectable } from '@angular/core';
import { Article } from '../models/article';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // cartDevis: Article[] = [];
  cartDevis$ = new Subject<Article[]>
  cartDevis: Article[] = [];

  addToCart(article: Article) {
    this.cartDevis.push(article);
    // sauvegarde dans le local storage
    this.cartDevis$.next(this.cartDevis)
    // localStorage.setItem('cart', JSON.stringify(this.cartDevis));
        this.cartDevis$.subscribe((cartDevis) => {
          this.cartDevis = cartDevis;
        });
       
    
  }

  getItems() {
    // récupération du local storage
  //  this.cartDevis = this.cartDevis
    return this.cartDevis;
  }

  clearCart() {
    this.cartDevis = [];
    // Effacer les données du local storage
    // localStorage.removeItem('cart');
    this.cartDevis$.next(this.cartDevis);
    this.cartDevis$.subscribe((cartDevis) => {
      this.cartDevis = cartDevis
    })
  
    
    return this.cartDevis;
  }

  removeItem(article: Article) {
    // Retirer un article du panier
    this.cartDevis = this.cartDevis.filter((item) => item !== article);
    // Mettre à jour le local storage
    // localStorage.setItem('cart', JSON.stringify(this.cartDevis));
        this.cartDevis$.next(this.cartDevis);
    return this.cartDevis;
  }

  
  constructor() { }
}
