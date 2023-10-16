import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-page-pastry',
  templateUrl: './page-pastry.component.html',
  styleUrls: ['./page-pastry.component.css']
})
export class PagePastryComponent implements OnInit{
  tabArticles: Article[] = [];
  // article!: Article;

  constructor(
    private articleService: ArticleService
  ) { }

  ngOnInit(): void {
    this.articleService.getAllArticles().subscribe((articles) => {
      this.tabArticles = articles; console.log(this.tabArticles);
    
    });
   
  }
}
