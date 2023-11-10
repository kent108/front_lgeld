import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/models/article';
import { Price } from 'src/app/models/price';
import { ArticleService } from 'src/app/services/article.service';
import { PriceService } from 'src/app/services/price.service';
import { pictureService } from 'src/app/services/picture.service';
import { CartService } from 'src/app/services/cart.service';
import { FormatService } from 'src/app/services/format.service';
import { Format } from 'src/app/models/format';
import { FormsModule } from '@angular/forms';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css'],
})
export class ArticleDetailComponent {
  @Input()
  article!: Article;
  articleToCart!: Article;
  selectedFormat: Format | undefined;
  price!: Price;
  prices!: Price[];
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
    private formatService: FormatService,
    private FormsModule: FormsModule
  ) {}

  ngOnInit(): void {
    const articleIdfromRoute = Number(this.route.snapshot.paramMap.get('id'));

    this.articleService
      .getArticleById(articleIdfromRoute)
      .subscribe((article) => {
        // console.log(article);

        this.article = article;
        if (this.article) {
          console.log(this.article);

          this.pictureService
            .getPictureById(this.article.picture_id)
            .subscribe({
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
        // this.article.prices.push(this.price);
      });

    // const articleIdfromRoute = Number(this.route.snapshot.paramMap.get('id'));

    // this.articleService
    //   .getArticleById(articleIdfromRoute)
    //   .subscribe((article) => {
    //     this.article = article;

    //     if (this.article) {
    //       this.formatService.getFormatsByArticleId(this.article.id).subscribe(
    //         (formats) => {
    //           console.log('Formats dans le composant:', formats);
    //           this.article.formats = formats;
    //         },
    //         (error) => {
    //           console.error(
    //             'Erreur lors de la récupération des formats:',
    //             error
    //           );
    //         }
    //       );

    //       this.pictureService
    //         .getPictureById(this.article.picture_id)
    //         .subscribe({
    //           next: (data: Blob) => {
    //             this.createImageFromBlob(data);
    //           },
    //           error: (error) => {
    //             console.log(error);
    //           },
    //         });
    //     }
    //   });
  }

  articleToLocalStorage(articleId: number, formatId: number) {
    console.log(formatId);
    
    this.articleService.getArticleById(articleId).subscribe((article) => { 
      this.articleToCart = article;
      console.log(this.articleToCart);
      
    });
  }

  // Fonction pour ajouter un article
  addToCart(): void {
    this.cartService.addToCart(this.article);
    alert('Article ajouté au panier');
  }

  // Reception de l'image pas le blob
  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.readAsDataURL(image);
    reader.addEventListener('load', () => {
      this.imageToShow = reader.result;
    });
  }
}


