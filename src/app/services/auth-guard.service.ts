import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
  private readonly apiUrl = 'http://localhost:3000/api/auth';
  


  constructor(private http: HttpClient) { }

  validateToken(token: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    });

    return this.http.post(`${this.apiUrl}`, {}, { headers }).pipe(
      map((response) => {
        // On retourne la réponse du serveur
           return response;
      }),
      catchError(() => {
        // Si le token n'est pas valide
        return throwError(
          'Une erreur est survenue lors de la validation du token.'
        );
      })
    );
  }
}
