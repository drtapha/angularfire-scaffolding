import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthProfilComponent } from './auth-profil.component';

describe('AuthProfilComponent', () => {
  let component: AuthProfilComponent;
  let fixture: ComponentFixture<AuthProfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthProfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
