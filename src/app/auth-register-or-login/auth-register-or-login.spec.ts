import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthRegisterOrLogin } from './auth-register-or-login';

describe('AuthRegisterOrLogin', () => {
  let component: AuthRegisterOrLogin;
  let fixture: ComponentFixture<AuthRegisterOrLogin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthRegisterOrLogin]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AuthRegisterOrLogin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
