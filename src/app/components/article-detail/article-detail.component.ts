import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';


@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css'],
})
export class ArticleDetailComponent {
  // @Input() 
  article!: Article;

  // ngOnChanges() {
  //   this.article &&
  //     this.article.name &&
  //     this.article.description &&
  //     this.article.type
  // }

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) {}

  ngOnInit(): void{
    const articleIdfromRoute = Number(
      this.route.snapshot.paramMap.get('id')
    )

    this.articleService.getArticleById(articleIdfromRoute).subscribe((article) => {
      this.article = article;
    })
  }
  
}
