import { Component, inject } from '@angular/core';
import { AsyncPipe, NgOptimizedImage } from '@angular/common';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatCard, MatCardAvatar, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MatDivider, MatDividerModule } from '@angular/material/divider';
import { MatListItem, MatNavList } from '@angular/material/list';
import { MatSidenav, MatSidenavContainer, MatSidenavContent, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from '../auth-service';

@Component({
  selector: 'app-layout',
  imports: [
    AsyncPipe,
    MatButton,
    MatDividerModule,
    MatIconModule,
    MatListItem,
    MatNavList,
    MatSidenavModule,
    MatToolbarModule,
    NgOptimizedImage,
    RouterLink,
    MatDivider,
    MatIconButton
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.scss'
})
export class Layout {
  private breakpointObserver = inject(BreakpointObserver);
  readonly authService = inject(AuthService)

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
}
