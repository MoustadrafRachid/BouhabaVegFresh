import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://api.yourdomain.com'; // Remplacez par l'URL de votre backend

  constructor(private http: HttpClient) { }

  // Méthode pour gérer les erreurs
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // For demo purposes only
    return Promise.reject(error.message || error);
  }

  // Exemple de méthode GET
  get(endpoint: string, params?: any): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    return this.http.get(`${this.apiUrl}/${endpoint}`, { headers, params })
      .pipe(catchError(this.handleError));
  }

  // Exemple de méthode POST
  post(endpoint: string, data: any): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    return this.http.post(`${this.apiUrl}/${endpoint}`, data, { headers })
      .pipe(catchError(this.handleError));
  }

  // Exemple de méthode PUT
  put(endpoint: string, data: any): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    return this.http.put(`${this.apiUrl}/${endpoint}`, data, { headers })
      .pipe(catchError(this.handleError));
  }

  // Exemple de méthode DELETE
  delete(endpoint: string): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    return this.http.delete(`${this.apiUrl}/${endpoint}`, { headers })
      .pipe(catchError(this.handleError));
  }
}
