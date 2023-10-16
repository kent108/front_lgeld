import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { Token } from '../models/token';


@Injectable({
  providedIn: 'root',
})
export class UserService {
  // private userLoggedIn = new BehaviorSubject<boolean>(false);
  // userLoggedIn$ = this.userLoggedIn.asObservable(); //  Observable abonnements

  constructor(private readonly http: HttpClient, private router: Router) {}

  url: string = `http://localhost:3000/api/`;
  // 1 - déclaration d'un behaviour subject (init à false) pour transmettre un booléen (true si connecté)

  loginUser(user: User): Observable<Token> {
    // On envoie l'utilisateur au serveur
    return this.http.post<Token>(`${this.url}auth/login`, user);
  }

  subscribe(user: User): Observable<User> {
    // On envoie l'utilisateur au serveur
    return this.http.post<User>(`${this.url}auth/register`, user);
  }
}
