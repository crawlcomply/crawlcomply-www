import { computed, inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

import { LocalStorage } from './local-storage';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly localStorage = inject(LocalStorage);
  private readonly accessToken = signal<string | null>(this.localStorage.getItem("access_token"));
  private readonly router = inject(Router);
  readonly isLoggedIn = computed(() => this.accessToken() != null);

  setTokens(accessToken: string, refreshToken: string): void {
    this.localStorage.setItem("access_token", accessToken);
    this.localStorage.setItem("refresh_token", refreshToken);
    this.accessToken.set(accessToken);
  }

  deleteTokens(): void {
    this.localStorage.removeItem("access_token");
    this.localStorage.removeItem("refresh_token");
    this.accessToken.set(null);
  }

  logout() {
    this.deleteTokens();
    this.router.navigate(["/"]).then(console.info);
  }
}
