import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Price, PriceToSend } from '../models/price';

@Injectable({
  providedIn: 'root',
})
export class PriceService {
  url: string = 'http://localhost:3000/api/prices';

  constructor(private http: HttpClient) { }
  
  getAllPrices(): Observable<Price[]> {
    return this.http.get<Price[]>(this.url);
  }
 
  getPriceByIds(articleId: number, formatId: number): Observable<Price> {
    const body = {
      article_id: articleId,
      format_id: formatId,
    }
    return this.http.post<Price>(
      'http://localhost:3000/api/prices/article',
      body
    );
  }

  updatePrice(price: Price): Observable<Price> {
    return this.http.put<Price>(this.url, price);
  }
 
  createPrice(price: PriceToSend): Observable<Price> {
    return this.http.post<Price>(
      this.url, price
    );
  }
}
