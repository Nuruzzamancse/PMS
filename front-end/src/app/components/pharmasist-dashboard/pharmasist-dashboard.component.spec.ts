import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmasistDashboardComponent } from './pharmasist-dashboard.component';

describe('PharmasistDashboardComponent', () => {
  let component: PharmasistDashboardComponent;
  let fixture: ComponentFixture<PharmasistDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmasistDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmasistDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
