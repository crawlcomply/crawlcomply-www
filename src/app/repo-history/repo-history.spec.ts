import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoHistory } from './repo-history';

describe('RepoHistory', () => {
  let component: RepoHistory;
  let fixture: ComponentFixture<RepoHistory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepoHistory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepoHistory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
