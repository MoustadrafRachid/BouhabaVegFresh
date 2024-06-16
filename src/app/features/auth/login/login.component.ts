import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    if (this.authService.login(this.username, this.password)) {
      this.router.navigate(['/']); // Rediriger vers la page d'accueil après connexion réussie
    } else {
      alert('Nom d\'utilisateur ou mot de passe incorrect');
    }
  }
}
