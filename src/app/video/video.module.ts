import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDialogModule } from "@angular/material/dialog";

import { VideoComponent } from "./video.component";


@NgModule({
  declarations: [VideoComponent],
    imports: [CommonModule, MatDialogModule]
})
export class VideoModule { }
