import { Component } from '@angular/core';

import { MatExpansionModule } from '@angular/material/expansion';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-faq',
  imports: [MatExpansionModule, RouterLink],
  templateUrl: './faq.html',
  styleUrl: './faq.scss'
})
export class Faq {
}
