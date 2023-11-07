import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { Token } from '../models/token';


@Injectable({
  providedIn: 'root',
})
export class UserService {
  private usersSubject = new BehaviorSubject<User[]>([]);
  public users = this.usersSubject.asObservable();

  constructor(private readonly http: HttpClient, private router: Router) {}

  url: string = `http://localhost:3000/api/`;
 
  public setUsers() {
    this.http.get<User[]>('http://localhost:3000/api/users')
      .pipe(
        catchError(() => {
          this.usersSubject.error('An error occurred');
          return [];
        }),
        map((users) => {
          // traitement des données avant de mettre à jour l'état courant
          return users;
        })
      )
      .subscribe((users) => {
        this.usersSubject.next(users);
      });
  }
  
  loginUser(user: User): Observable<Token> {
    // On envoie l'utilisateur au serveur
    return this.http.post<Token>(`${this.url}auth/login`, user);
  }
  
  subscribe(user: User): Observable<User> {
    // On envoie l'utilisateur au serveur
    return this.http.post<User>(`${this.url}auth/register`, user);
  }
  }

