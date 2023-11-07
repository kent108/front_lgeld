import { Component, Input } from '@angular/core';
import { Article } from 'src/app/models/article';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent {
  @Input() tabArticles!: Article[];

  ngOnInit() {
 
   
 } 
}
