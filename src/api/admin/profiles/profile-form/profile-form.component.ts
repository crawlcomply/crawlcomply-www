/* eslint-disable */
import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ProfileService } from '../../../services';
import { CreateProfile } from '../../../models';

@Component({
  selector: 'app-profile-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule],
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent {
  private readonly router = inject(Router);
  private readonly svc = inject(ProfileService);

  readonly form = new FormGroup({
    'alias': new FormControl<CreateProfile['alias']>("", { validators: [Validators.required], nonNullable: true }),
    'avatar_url': new FormControl<CreateProfile['avatar_url'] | null>(null),
    'description': new FormControl<CreateProfile['description'] | null>(null),
    'github_id': new FormControl<CreateProfile['github_id'] | null>(null),
    'username': new FormControl<CreateProfile['username']>("", { validators: [Validators.required], nonNullable: true })
  });

  readonly isEditMode = computed(() => false);

  constructor() {
  }

  onSubmit(): void {
    if (this.form.invalid) return;
    const formValue = this.form.getRawValue() as CreateProfile;
    const action$ = this.svc.upsert({ body: formValue } as any);
    action$.subscribe(() => this.router.navigate(['admin/profiles']));
  }

  onCancel(): void {
    this.router.navigate(['admin/profiles']);
  }

}
