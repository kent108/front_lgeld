import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Format } from '../models/format';
import { Observable, catchError, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormatService {
  url: string = 'http://localhost:3000/api/formats';

  constructor(private http: HttpClient) {}

  getAllFormats() {
    return this.http.get<Format[]>(this.url);
  }

  

  getFormatsByArticleId(articleId: number): Observable<Format[]> {
    return this.http
      .get<Format[]>(`http://localhost:3000/api/formats/${articleId}`)
      .pipe(
        tap((article) => console.log('Formats reçus du serveur:', article))
      );
  }
  
}
