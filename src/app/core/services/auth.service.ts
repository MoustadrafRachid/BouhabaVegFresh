import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private users: { username: string, password: string }[] = []; // Stockage des utilisateurs
  private authenticated: boolean = false;
  private userRole: string = 'user';
  private token: string | null = null;

  constructor() { }

  isAuthenticated(): boolean {
    return this.authenticated;
  }

  getRole(): string {
    return this.userRole;
  }

  isLoggedIn(): boolean {
    return this.authenticated;
  }

  getToken(): string | null {
    return this.token;
  }

  login(username: string, password: string): boolean {
    const user = this.users.find(user => user.username === username && user.password === password);
    if (user) {
      this.authenticated = true;
      this.token = 'example-token';
      return true;
    }
    return false;
  }

  register(username: string, password: string): boolean {
    if (this.users.find(user => user.username === username)) {
      return false; // Nom d'utilisateur déjà pris
    }
    this.users.push({ username, password });
    return true;
  }

  logout(): void {
    this.authenticated = false;
    this.userRole = '';
    this.token = null;
  }
}
