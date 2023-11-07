import { Injectable } from '@angular/core';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Article[] = [];
  


  addToCart(article: Article) {
    this.items.push(article);
    // sauvegarde dans le local storage
    localStorage.setItem('cart', JSON.stringify(this.items));
  }

  getItems() {
    // récupération du local storage
    this.items = JSON.parse(localStorage.getItem('cart') || '[]');
    return this.items;
  }

  
  clearCart() {
    this.items = [];
    // Effacer les données du local storage
    localStorage.removeItem('cart');
    return this.items;
  }

  
  constructor() { }
}
