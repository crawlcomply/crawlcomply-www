import { Component, inject, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, NonNullableFormBuilder, Validators } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import { HttpClient } from '@angular/common/http';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { Observable } from 'rxjs';

import { GrantType, Token, TokenRequest, TokenService } from '../../api';
import { Router } from '@angular/router';

@Injectable({ providedIn: "root" })
export class TokenHackService {
  private readonly httpClient: HttpClient = inject(HttpClient);

  getToken(body: TokenRequest): Observable<Token> {
    return this.httpClient.post<Token>("/api/token", body);
  }
}

@Component({
  selector: 'app-auth-register-or-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './auth-register-or-login.html',
  styleUrl: './auth-register-or-login.scss',
})
export class AuthRegisterOrLogin {
  private fb = inject(NonNullableFormBuilder);
  private readonly router = inject(Router);
  private readonly tokenService = inject(TokenService);
  private readonly tokenHackService = inject(TokenHackService);
  readonly token = toSignal(this.tokenService.token());

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Form Submitted:', this.loginForm.getRawValue());
      this.tokenHackService.getToken({
        grant_type: GrantType.Password,
        username: this.loginForm.value.email as string,
        password: this.loginForm.value.password as string
      }).subscribe(token => {
        localStorage.setItem("access_token", token.access_token);
        localStorage.setItem("refresh_token", token.refresh_token);
        this.router.navigateByUrl("/profile").then(console.info);
      })
    } else {
      console.error('Form is invalid.');
      this.loginForm.markAllAsTouched(); // Show validation errors
    }
  }
}
