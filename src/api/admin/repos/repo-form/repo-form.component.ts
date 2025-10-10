/* eslint-disable */
import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RepoService } from '../../../services';
import { CreateRepo } from '../../../models';

@Component({
  selector: 'app-repo-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule],
  templateUrl: './repo-form.component.html',
  styleUrls: ['./repo-form.component.css']
})
export class RepoFormComponent {
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly svc = inject(RepoService);

  readonly form = new FormGroup({
    'comments_url': new FormControl<CreateRepo['comments_url'] | null>(null),
    'default_branch': new FormControl<CreateRepo['default_branch'] | null>(null),
    'description': new FormControl<CreateRepo['description'] | null>(null),
    'fork': new FormControl<CreateRepo['fork'] | null>(null),
    'full_name': new FormControl<CreateRepo['full_name'] | null>(null),
    'html_url': new FormControl<CreateRepo['html_url'] | null>(null),
    'id': new FormControl<CreateRepo['id']>(0, { validators: [Validators.required], nonNullable: true }),
    'is_monorepo': new FormControl<CreateRepo['is_monorepo'] | null>(null),
    'languages': new FormControl<CreateRepo['languages'] | null>(null),
    'last_commit': new FormControl<CreateRepo['last_commit'] | null>(null),
    'name': new FormControl<CreateRepo['name']>("", { validators: [Validators.required], nonNullable: true }),
    'node_id': new FormControl<CreateRepo['node_id'] | null>(null),
    'org': new FormControl<CreateRepo['org']>("", { validators: [Validators.required], nonNullable: true }),
    'private': new FormControl<CreateRepo['private'] | null>(null),
    'pulls_url': new FormControl<CreateRepo['pulls_url'] | null>(null),
    'spdx': new FormControl<CreateRepo['spdx'] | null>(null),
    'visibility': new FormControl<CreateRepo['visibility'] | null>(null)
  });

  readonly isEditMode = computed(() => false);

  constructor() {
  }

  onSubmit(): void {
    if (this.form.invalid) return;
    const formValue = this.form.getRawValue() as CreateRepo;
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
