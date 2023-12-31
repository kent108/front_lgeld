import { Component, Injectable, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/models/article';
import { Format } from 'src/app/models/format';
import { Price } from 'src/app/models/price';
import { Type } from 'src/app/models/type';
import { ArticleService } from 'src/app/services/article.service';
import { PriceService } from 'src/app/services/price.service';
import { AuthInterceptorService } from 'src/app/services/auth-interceptor.service';

@Component({
  selector: 'app-admintable',
  templateUrl: './admintable.component.html',
  styleUrls: ['./admintable.component.css'],
})
@Injectable()
export class AdmintableComponent {
  showModal = false;

  @Input()
  articles: Article[] = [];
  types: Type[] = [];
  formats: Format[] = [];
  prices: Price[] = [];

  constructor(
    private articleService: ArticleService,
    private router: Router,
    private priceService: PriceService
  ) {}

  ngOnInit(): void {
    this.articleService.getAllArticles().subscribe((formats) => {
      this.articles = formats;
    });
  }

  navigateToEdit(articleId: number) {
    this.router.navigate(['/article-edit', articleId]);
  }

  navigateToAdd() {
    this.router.navigate(['/add-article']);
  }

  deleteArticleByPrice(price: number): void {
    this.articleService.deleteArticleByPrice(price).subscribe(
      (response) => {
        // Refresh the list of articles or handle the response as needed
        
      },
      (error) => {
       
        // Handle the error as needed
      }
    );
  }

  toggleModal() {
    this.showModal = !this.showModal;
  }

  logOut() {
    // localStorage.clear();
    localStorage.removeItem('access_token');
    this.router.navigate(['/home']);
  }
}
