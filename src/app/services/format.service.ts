import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Format } from '../models/format';

@Injectable({
  providedIn: 'root',
})
export class FormatService {
  url: string = 'http://localhost:3000/api/formats';

  constructor(private http: HttpClient) { }
  
  getFormats() { 
    return this.http.get<Format[]>(this.url);
  }

  
}
