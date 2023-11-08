import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/models/article';
import { Price } from 'src/app/models/price';
import { ArticleService } from 'src/app/services/article.service';
import { CartService } from 'src/app/services/cart.service';
import { PriceService } from 'src/app/services/price.service';
import { pictureService } from 'src/app/services/picture.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  totalPrice: number = 0;
  items = this.cartService.getItems();
  @Input() article!: Article;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    console.log(this.items);
   
  }

  clearCart() {
    this.items = this.cartService.clearCart();
  }


  
}
