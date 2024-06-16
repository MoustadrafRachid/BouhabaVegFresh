import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  username: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    if (this.password !== this.confirmPassword) {
      alert('Les mots de passe ne correspondent pas');
      return;
    }

    // Logique d'inscription (remplacer par l'implémentation réelle)
    if (this.authService.register(this.username, this.password)) {
      this.router.navigate(['/login']); // Rediriger vers la page de connexion après inscription réussie
    } else {
      alert('Inscription échouée');
    }
  }
}
