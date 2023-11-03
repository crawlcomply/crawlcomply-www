import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetRegistryComponent } from './asset-registry.component';
import {MatExpansionModule} from "@angular/material/expansion";
import { AssetCreateComponent } from '../asset-create/asset-create.component';
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatIconModule} from "@angular/material/icon";



@NgModule({
  declarations: [
    AssetRegistryComponent,
    AssetCreateComponent
  ],
  exports: [
    AssetRegistryComponent,
    AssetCreateComponent
  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule
  ]
})
export class AssetRegistryModule { }
