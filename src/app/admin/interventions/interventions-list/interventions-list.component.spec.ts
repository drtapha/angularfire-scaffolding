import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterventionsListComponent } from './interventions-list.component';

describe('InterventionsListComponent', () => {
  let component: InterventionsListComponent;
  let fixture: ComponentFixture<InterventionsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterventionsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterventionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
