import { Component, inject } from '@angular/core';
import { AsyncPipe, NgOptimizedImage } from '@angular/common';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.html',
  styleUrls: ['./landing-page.scss'],
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
  ],
})
export class LandingPage {
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
    { icon: 'install_desktop',
      title: '0. Install GitHub App',
      description: 'Authorize CrawlComply with just a few clicks from the GitHub Marketplace.' },
    { icon: 'settings',
      title: '1. Configure',
      description: 'Quality gates will be inferred from your repo. To steer, add a simple `.crawlcomply.yml` file to your repository.' },
    { icon: 'check_circle',
      title: '2. Get Insights',
      description: 'Receive instant feedback on every pull request and watch your code quality improve.' },
  ];
}
