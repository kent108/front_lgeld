import { Component, Input } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input()
  tabArticles!: Article[];
  

  constructor(private articleService: ArticleService,) { }

  ngOnChanges() {
  
  }
}
