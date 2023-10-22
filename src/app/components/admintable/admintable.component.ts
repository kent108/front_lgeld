import { Component, Injectable, Input } from '@angular/core';
import { DomSanitizer, SafeScript } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Article } from 'src/app/models/article';
import { Format } from 'src/app/models/format';
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
  @Input()
  articles: Article[] = [];
  types: Type[] = [];
  formats: Format[] = [];

  articlesAvecDoublon: any[] = [];

  constructor(
    private articleService: ArticleService,
    private router: Router,
    private priceService: PriceService,
    private sanitizer: DomSanitizer
  ) {
    this.safeScript = this.sanitizer.bypassSecurityTrustScript(this.dangerousScript);
  }

  public safeScript: SafeScript;
  public dangerousScript = 'alert("Danger!")';

  ngOnInit(): void {
    
    this.articleService.getAllArticles().subscribe((articles) => {
      this.articles = articles;

      for (let i = 0; i < this.articles.length; i++) {
        for (let j = 0; j < this.articles[i].formats.length; j++) {
          this.priceService
            .getPriceByIds(this.articles[i].id, this.articles[i].formats[j].id)
            .subscribe((prix) => {
              this.articlesAvecDoublon.push({
                id: this.articles[i].id,
                name: this.articles[i].name,
                description: this.articles[i].description,
                picture_id: this.articles[i].picture_id,
                formats: this.articles[i].formats[j],
                picture: this.articles[i].picture,
                type: this.articles[i].type,
                prix: prix.price,
              });
            });
        }
      }
    });
  }

  navigateToEdit(articleId: number) {
    this.router.navigate(['/article-edit', articleId]);
  }

  navigateToAdd() {
    this.router.navigate(['/add-article']);
  }

  deleteArticle(id: number): void {
    this.articleService.deleteArticle(id).subscribe(() => {
      this.articles = this.articles.filter((article) => article.id !== id);
    });
  }




  
}
