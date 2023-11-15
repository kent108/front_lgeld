import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, map } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { Token } from '../models/token';


@Injectable({
  providedIn: 'root',
})
export class UserService {
  // private usersSubject = new BehaviorSubject<User[]>([]);
  // public users = this.usersSubject.asObservable();
  // isAdmin: boolean = false;
  url: string = `http://localhost:3000/api/`;
 

  
  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('access_token');
    let headers = new HttpHeaders();
    if (token) {
      headers = headers.set('Authorization', 'Bearer ' + token);
    }
    return headers;
  }

  constructor(private http: HttpClient) {}

  getAllUser() {
    return this.http.get<User>('http://localhost:3000/api/users');
  }

  loginUser(user: User): Observable<Token> {
    // On envoie l'utilisateur au serveur
    return this.http.post<Token>(`${this.url}auth/login`, {headers : this.getHeaders(), user});
  }

  subscribe(user: User): Observable<User> {
    // On envoie l'utilisateur au serveur
    return this.http.post<User>(`${this.url}auth/register`, user);
  }
}

