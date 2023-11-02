import { Component } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-page-traiteur',
  templateUrl: './page-traiteur.component.html',
  styleUrls: ['./page-traiteur.component.css']
})
export class PageTraiteurComponent {
  traiteurArticles: Article[] = [];

  constructor(
    private articleService: ArticleService
  ) { }

  ngOnInit(): void {
    this.articleService
      .getArticlesByTypes('Traiteur')
      .subscribe((articles) => {
        this.traiteurArticles = articles;
      });
  }
}
