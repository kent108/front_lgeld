import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article, ArticleToSend, NewArticle } from '../models/article';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  url: string = 'http://localhost:3000/api/articles';

  constructor(private http: HttpClient) {}

  getAllArticles(): Observable<Article[]> {
    return this.http.get<Article[]>('http://localhost:3000/api/articles');
  }

  getArticleById(id: number): Observable<Article> {
    return this.http.get<Article>(`${this.url}/${id}`);
  }

  getArticlesByTypes(type: string): Observable<Article[]> {
    return this.http.get<Article[]>(
      'http://localhost:3000/api/articles/types/' + type
    );
  }

  getArticlesByFormat(format: string): Observable<Article[]> {
    return this.http.get<Article[]>(
      'http://localhost:3000/api/articles/formats/' + format
    );
  }

  updateArticle(updateArticle: ArticleToSend, id: number): Observable<Article> {
    return this.http.patch<Article>(
      `${this.url}/${ id }`,
      updateArticle
    );
  }

  deleteArticle(id: number): Observable<Article> {
    return this.http.delete<Article>(`${this.url}/${id}`);
  }

  deleteArticleByFormat(format: string): Observable<Article> {
    return this.http.delete<Article>(
      `http://localhost:3000/api/formats/${format}`
    );
  }

  deleteArticleByPrice(id: number): Observable<Article> {
    return this.http.delete<Article>(`http://localhost:3000/api/prices/${id}`);
  }

  createArticle(newArticle: NewArticle): Observable<Article> {
    return this.http.post<Article>(
      'http://localhost:3000/api/articles',
      newArticle
    );
  }
}
