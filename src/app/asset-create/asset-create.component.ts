import { Component } from '@angular/core';

@Component({
    selector: 'app-asset-create',
    templateUrl: './asset-create.component.html',
    styleUrls: ['./asset-create.component.scss'],
    standalone: false
})
export class AssetCreateComponent {
  showAddNewAsset: boolean = false;
}
