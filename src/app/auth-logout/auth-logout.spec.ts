import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthLogout } from './auth-logout';

describe('AuthLogout', () => {
  let component: AuthLogout;
  let fixture: ComponentFixture<AuthLogout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthLogout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthLogout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
