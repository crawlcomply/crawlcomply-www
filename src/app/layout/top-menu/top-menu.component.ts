import { Component, Input } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { MatSidenav } from "@angular/material/sidenav";
import { Router } from "@angular/router";

import { VideoComponent } from "../../video/video.component";

@Component({
  selector: 'aio-top-menu',
  templateUrl: './top-menu.component.html'
})
export class TopMenuComponent {
  @Input() isWide = false;

  @Input() parent: MatSidenav | undefined;

  constructor(private router: Router,
              public dialog: MatDialog) {}
  openSlides() {
    this.dialog.open(VideoComponent, {
      width: "229px",
      height: "451px",
      enterAnimationDuration: '1500ms',
      exitAnimationDuration:'0ms',
      panelClass: 'custom-dialog-container'
    });
  }

  goAndCloseParent(path: string) {
    this.router.navigate([path]).then(() => {
      if (this.parent) this.parent?.close();
    }).catch(console.error);
  }
}
