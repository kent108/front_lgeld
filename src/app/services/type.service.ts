import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Type } from '../models/type';

@Injectable({
  providedIn: 'root'
})
export class TypeService {
  url: string = 'http://localhost:3000/api/types';

  constructor(private http: HttpClient) { }

  getTypes() {
    return this.http.get<Type[]>(this.url);
  }
}
