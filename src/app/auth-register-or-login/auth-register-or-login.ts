import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, NonNullableFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { GrantType, TokenService } from '../../api';
import { AuthService } from '../auth-service';

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
  private readonly authService = inject(AuthService)

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Form Submitted:', this.loginForm.getRawValue());
      this.tokenService.token(
        GrantType.Password,
        null,
        null,
        null,
        this.loginForm.value.password as string,
        null,
        null,
        this.loginForm.value.email as string,
        'body',
        undefined
      ).subscribe(token => {
        this.authService.setTokens(
          token.access_token,
          token.refresh_token
        );
        this.router.navigateByUrl("/profile").then(console.info);
      })
    } else {
      console.error('Form is invalid.');
      this.loginForm.markAllAsTouched(); // Show validation errors
    }
  }
}
