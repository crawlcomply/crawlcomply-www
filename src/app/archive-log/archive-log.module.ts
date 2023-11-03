import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArchiveLogComponent } from './archive-log.component';
import {MatTableModule} from "@angular/material/table";



@NgModule({
  declarations: [
    ArchiveLogComponent
  ],
  exports: [
    ArchiveLogComponent
  ],
  imports: [
    CommonModule,
    MatTableModule
  ]
})
export class ArchiveLogModule { }
