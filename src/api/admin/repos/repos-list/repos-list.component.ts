/* eslint-disable */
import { Component, inject, signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RepoService } from '../../../services';
import { Repo } from '../../../models';

@Component({
  selector: 'app-repos-list',
  standalone: true,
  imports: [CommonModule, RouterModule, MatTableModule, MatIconModule, MatButtonModule, MatTooltipModule],
  templateUrl: './repos-list.component.html',
  styleUrls: ['./repos-list.component.css']
})
export class RepoListComponent {
  private readonly svc = inject(RepoService);
  readonly data: WritableSignal<Repo[]> = signal([]);
  readonly displayedColumns: string[] = ['comments_url', 'default_branch', 'description', 'fork', 'full_name', 'html_url', 'id', 'is_monorepo', 'languages', 'last_commit', 'name', 'node_id', 'org', 'private', 'pulls_url', 'spdx', 'visibility', 'actions'];

  constructor() {
    this.loadData();
  }

  loadData() {
    this.svc.readMany().subscribe((d: any) => this.data.set(d.repos || d.profiles || d.repos || d));
  }

  delete(id: number | string): void {
    if (confirm('Are you sure?')) {
      this.svc.remove({ org: id } as any).subscribe(() => this.loadData());
    }
  }
}
