import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe, NgOptimizedImage } from '@angular/common';

// Angular Material Modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  standalone: true,
  imports: [
    AsyncPipe,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
  ],
})
export class LandingPageComponent {
  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  features = [
    {
      icon: 'assessment',
      title: 'Automated Code Coverage',
      description: 'Ensure every pull request meets your quality standards with automated code coverage reporting directly in your PRs.',
    },
    {
      icon: 'rule',
      title: 'Smart Linting',
      description: 'Catch syntax errors and style issues before they merge. Our bot provides actionable feedback to keep your code consistent.',
    },
    {
      icon: 'timeline',
      title: 'Historical Insights',
      description: 'Track code quality trends over time. Explore historical data for your repositories and organization to make informed decisions.',
    },
  ];

  steps = [
    { icon: 'install_desktop', title: '1. Install GitHub App', description: 'Authorize CrawlComply with just a few clicks from the GitHub Marketplace.' },
    { icon: 'settings', title: '2. Configure', description: 'Quality gates will be inferred from your repo. To steer, add a simple `.crawlcomply.yml` file to your repository.' },
    { icon: 'check_circle', title: '3. Get Insights', description: 'Receive instant feedback on every pull request and watch your code quality improve.' },
  ];
}
