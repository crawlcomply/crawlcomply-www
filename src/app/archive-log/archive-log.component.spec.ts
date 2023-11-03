import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveLogComponent } from './archive-log.component';

describe('ArchiveLogComponent', () => {
  let component: ArchiveLogComponent;
  let fixture: ComponentFixture<ArchiveLogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArchiveLogComponent]
    });
    fixture = TestBed.createComponent(ArchiveLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
