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

  getArticleById(id: number): Observable<Article> {
    return this.http.get<Article>(`${this.url}/${id}`);
  }

  getArticlesByTypes(type: string): Observable<Article[]> {
    return this.http.get<Article[]>('http://localhost:3000/api/articles/types/' + type);
  }

  getArticlesByFormat(format: string): Observable<Article[]> {
    return this.http.get<Article[]>('http://localhost:3000/api/articles/formats/' + format);
  }

  updateArticle( updateArticle: Article): Observable<Article> {
    return this.http.patch<Article>(`${this.url}/${updateArticle.id}`, updateArticle);
  }

  deleteArticle(id: number): Observable<Article> {
    return this.http.delete<Article>(`${this.url}/${id}`);
  }

  createArticle(newArticle: Article): Observable<Article> {
    return this.http.post<Article>(
      'http://localhost:3000/api/articles',
      newArticle 
    );
  }

 

}
