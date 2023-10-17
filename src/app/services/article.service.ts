import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from '../models/article';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  url: string = 'http://localhost:3000/api/articles';
  
  constructor(private http: HttpClient) { }
  
  getAllArticles(): Observable<Article[]> {
    return this.http.get<Article[]>('http://localhost:3000/api/articles');
  }

  getArticlesByTypes(type: string): Observable<Article[]> {
    return this.http.get<Article[]>('http://localhost:3000/api/articles/types/' + type);
  }

}
