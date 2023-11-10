import { Component, Injectable, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Article } from 'src/app/models/article';
import { Format } from 'src/app/models/format';
import { Price } from 'src/app/models/price';
import { Type } from 'src/app/models/type';
import { ArticleService } from 'src/app/services/article.service';
import { PriceService } from 'src/app/services/price.service';

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
  // articlesAvecDoublon: any[] = [];

  constructor(
    private articleService: ArticleService,
    private router: Router,
    private priceService: PriceService,
    private sanitizer: DomSanitizer
  ) {}

  public safeHtml!: SafeHtml;
  public dangerousHtml = '<script>alert("Danger!")</script>';

  ngOnInit(): void {
    this.safeHtml = this.sanitizer.bypassSecurityTrustHtml(this.dangerousHtml);

    this.articleService.getAllArticles().subscribe((formats) => {
      this.articles = formats;
      console.log(this.articles);
    });
  }

  navigateToEdit(articleId: number) {
    this.router.navigate(['/article-edit', articleId]);
  }

  navigateToAdd() {
    this.router.navigate(['/add-article']);
  }

  // deleteArticle(id: number): void {
  //   this.articleService.deletePriceById(id).subscribe(() => {
  //      console.log('Suppression réussie');
  //     this.articles = this.articles.filter((article) => article.id !== id);
  //   });
  // }

  deleteArticleByPrice(price: number): void {
    this.articleService.deleteArticleByPrice(price).subscribe(
      (response) => {
        console.log(response, 'Suppression réussie');
        // Refresh the list of articles or handle the response as needed
      },
      (error) => {
        console.error(error, 'Suppression échouée');
        // Handle the error as needed
      }
    );
  }

  toggleModal() {
    this.showModal = !this.showModal;
  }
}
