import { Component } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { VideoComponent } from "../video/video.component";

@Component({
  selector: 'app-learn-more',
  templateUrl: './learn-more.component.html',
  styleUrls: [
    '../doc/doc.scss'
  ]
})
export class LearnMoreComponent {
  constructor(public dialog: MatDialog) {}
  openSlides() {
    this.dialog.open(VideoComponent, {
      width: "229px",
      height: "451px",
      enterAnimationDuration: '1500ms',
      exitAnimationDuration:'0ms',
      panelClass: 'custom-dialog-container'
    });
  }
}
