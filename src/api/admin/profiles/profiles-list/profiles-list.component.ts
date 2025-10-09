/* eslint-disable */
import { Component, inject, signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ProfileService } from '../../../services';
import { Profile } from '../../../models';

@Component({
  selector: 'app-profiles-list',
  standalone: true,
  imports: [CommonModule, RouterModule, MatTableModule, MatIconModule, MatButtonModule, MatTooltipModule],
  templateUrl: './profiles-list.component.html',
  styleUrls: ['./profiles-list.component.css']
})
export class ProfileListComponent {
  private readonly svc = inject(ProfileService);
  readonly data: WritableSignal<Profile[]> = signal([]);
  readonly displayedColumns: string[] = ['alias', 'avatar_url', 'description', 'github_id', 'username', 'actions'];

  constructor() {
    this.loadData();
  }

  loadData() {
    this.svc.read().subscribe((d: any) => this.data.set(d.profiles || d.profiles || d.repos || d));
  }

}
