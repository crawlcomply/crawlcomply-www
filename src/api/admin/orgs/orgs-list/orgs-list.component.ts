/* eslint-disable */
import { Component, inject, signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { OrgService } from '../../../services';
import { Org } from '../../../models';

@Component({
  selector: 'app-orgs-list',
  standalone: true,
  imports: [CommonModule, RouterModule, MatTableModule, MatIconModule, MatButtonModule, MatTooltipModule],
  templateUrl: './orgs-list.component.html',
  styleUrls: ['./orgs-list.component.css']
})
export class OrgListComponent {
  private readonly svc = inject(OrgService);
  readonly data: WritableSignal<Org[]> = signal([]);
  readonly displayedColumns: string[] = ['avatar_url', 'description', 'github_id', 'name', 'owner', 'actions'];

  constructor() {
    this.loadData();
  }

  loadData() {
    this.svc.readMany().subscribe((d: any) => this.data.set(d.orgs || d.profiles || d.repos || d));
  }

  delete(id: number | string): void {
    if (confirm('Are you sure?')) {
      this.svc.remove({ name: id } as any).subscribe(() => this.loadData());
    }
  }
}
