import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetRegistryComponent } from './asset-registry.component';

describe('AssetRegistryComponent', () => {
  let component: AssetRegistryComponent;
  let fixture: ComponentFixture<AssetRegistryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssetRegistryComponent]
    });
    fixture = TestBed.createComponent(AssetRegistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
