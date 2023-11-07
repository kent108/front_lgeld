import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/models/article';
import { Price } from 'src/app/models/price';
import { ArticleService } from 'src/app/services/article.service';
import { PriceService } from 'src/app/services/price.service';
import { pictureService } from 'src/app/services/picture.service';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css'],
})
export class ArticleDetailComponent {
  @Input() article!: Article;
  price!: Price;
  picture!: Blob;
  
  @Input()
  imageToShow: any;
  isImageLoading!: boolean;

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService,
    private priceService: PriceService,
    private pictureService: pictureService,
    private cartService: CartService,
  ) {}

  ngOnInit(): void {
    const articleIdfromRoute = Number(this.route.snapshot.paramMap.get('id'));
    
    this.articleService
    .getArticleById(articleIdfromRoute)
    .subscribe((article) => {
      this.article = article;
      if (this.article) {
        this.pictureService.getPictureById(this.article.picture_id).subscribe({
          next: (data: Blob) => {
          
  
            this.createImageFromBlob(data);
          },
          error: (error) => {
            console.log(error);
          },
        });
      }
    });

    this.priceService
      .getPriceByIds(articleIdfromRoute, 1)
      .subscribe((price) => {
        this.price = price;
        this.article.price = this.price;
        console.log(this.price);
        console.log(this.article.price);
        
        
      });

    
  }

  addToCart(article: Article,) {
    this.cartService.addToCart(article);

    
    window.alert('Votre produit a été ajouté au panier!');
  }

  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.readAsDataURL(image);
    reader.addEventListener('load', () => {
      this.imageToShow = reader.result;
      
    });
  }
}
  

