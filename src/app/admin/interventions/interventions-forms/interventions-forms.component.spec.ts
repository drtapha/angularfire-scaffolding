import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterventionsFormsComponent } from './interventions-forms.component';

describe('InterventionsFormsComponent', () => {
  let component: InterventionsFormsComponent;
  let fixture: ComponentFixture<InterventionsFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterventionsFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterventionsFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
