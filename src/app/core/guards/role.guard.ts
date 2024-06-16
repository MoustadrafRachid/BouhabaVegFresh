import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const expectedRole = route.data['expectedRole'];  // Correction ici
    const userRole = this.authService.getRole();

    if (!this.authService.isAuthenticated() || userRole !== expectedRole) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
