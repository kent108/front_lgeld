import {
  HttpClient,
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Connexion } from '../models/connexion';

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptorService implements HttpInterceptor {
  private bddURL = 'http://localhost:3000/api/auth';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  isConnected: boolean = false;
  public isConnected$ = new BehaviorSubject(
    localStorage.getItem('access_token')
  );

  constructor(private http: HttpClient) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('access_token');
    if (token) {
      const cloned = req.clone({
        headers: req.headers.set('authorization', `Bearer ${token}`),
      });
      return next.handle(cloned);
    } else {
      return next.handle(req);
    }
  }

  login(mail: string, password: string): Observable<Connexion> {
    const body = { mail: mail, password: password };
    return this.http.post<Connexion>(
      'http://localhost:3000/api/auth/login',
      body,
      this.httpOptions
    );
  }

  checkConnexion(): boolean {
    this.isConnected = !!localStorage.getItem('access_token');
    return this.isConnected;
  }
}
