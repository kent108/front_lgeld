import { Component, Input } from '@angular/core';
import { Article } from 'src/app/models/article';
import { Format } from 'src/app/models/format';
import { Type } from 'src/app/models/type';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input()
  tabArticles: Article[] = [];
  formats: Format[] = [];
  types: Type[] = [];

  constructor(private articleService: ArticleService) {}

  ngOnChanges() {}
}
