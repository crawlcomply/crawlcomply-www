/* eslint-disable */
import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { OrgService } from '../../../services';
import { CreateOrg } from '../../../models';

@Component({
  selector: 'app-org-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule],
  templateUrl: './org-form.component.html',
  styleUrls: ['./org-form.component.css']
})
export class OrgFormComponent {
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly svc = inject(OrgService);

  readonly form = new FormGroup({
    'avatar_url': new FormControl<CreateOrg['avatar_url'] | null>(null),
    'description': new FormControl<CreateOrg['description'] | null>(null),
    'github_id': new FormControl<CreateOrg['github_id'] | null>(null),
    'name': new FormControl<CreateOrg['name']>("", { validators: [Validators.required], nonNullable: true }),
    'owner': new FormControl<CreateOrg['owner']>("", { validators: [Validators.required], nonNullable: true })
  });

  readonly isEditMode = computed(() => false);

  constructor() {
  }

  onSubmit(): void {
    if (this.form.invalid) return;
    const formValue = this.form.getRawValue() as CreateOrg;
    const action$ = this.svc.upsert({ body: formValue } as any);
    action$.subscribe(() => {
      const navTarget = this.isEditMode() ? '..' : '.';
      this.router.navigate([navTarget], { relativeTo: this.route });
    });
  }

  onCancel(): void {
    this.router.navigate(['..'], { relativeTo: this.route });
  }

}
