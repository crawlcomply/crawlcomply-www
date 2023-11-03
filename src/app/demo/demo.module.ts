import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { MatSidenavModule } from "@angular/material/sidenav";
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";

import { DemoComponent } from './demo.component';
import { demoRoutes } from "./demo.routes";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSelectModule} from "@angular/material/select";
import {MatListModule} from "@angular/material/list";
import {MatTableModule} from "@angular/material/table";
import {ArchiveLogModule} from "../archive-log/archive-log.module";
import {MatExpansionModule} from "@angular/material/expansion";
import {AssetRegistryModule} from "../asset-registry/asset-registry.module";

@NgModule({
  declarations: [
    DemoComponent
  ],
  imports: [
    CommonModule, RouterModule, RouterModule.forChild(demoRoutes),
    MatSidenavModule, MatDialogModule, MatButtonModule, MatInputModule, MatIconModule,
    FormsModule, MatToolbarModule, MatSelectModule, MatListModule, MatTableModule, ArchiveLogModule, MatExpansionModule, NgOptimizedImage, AssetRegistryModule
  ]
})
export class DemoModule { }
