import { Component } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/models/article';
import { Price } from 'src/app/models/price';
import { ArticleService } from 'src/app/services/article.service';
import { PriceService } from 'src/app/services/price.service';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.css']
})
export class ArticleEditComponent {
  article: Article | null = null;
  price: Price | null = null;
  
  constructor(
    private fb: FormBuilder,
    private articleService: ArticleService,
    private router: Router,
    private route: ActivatedRoute,
    private priceService: PriceService

  ) { }

  articleForm: FormGroup = this.fb.group({
    id: [''],
    name: [''],
    description: [''],
    price: [''],
    picture_id: [''],
    type_id: [''],
    format_id: [''],
  });

  priceForm: FormGroup = this.fb.group({
    id: [''],
    article_id: [''],
    format_id: [''],
    price: [''],
  });

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.articleService.getArticleById(id).subscribe((article) => {
        this.article = article;
        this.articleForm.patchValue(article);
      });
    });
  }

  onSubmit(): void {
    if (this.articleForm.valid && this.article) {
      const updatedArticle: Article = {
        ...this.article,
        ...this.articleForm.value,
      };
      this.articleService.updateArticle(updatedArticle).subscribe((article) => {
        this.router.navigate(['articles']);
      });

      

    }
    if (this.priceForm.valid && this.price) {
      const updatedPrice: Price = {
        ...this.price,
        ...this.priceForm.value,
      };
      this.priceService.updatePrice(updatedPrice).subscribe((price) => {
        this.router.navigate(['articles']);
      })

    }


  
  }
}

