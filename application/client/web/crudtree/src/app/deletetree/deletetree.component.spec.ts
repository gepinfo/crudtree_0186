import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletetreeComponent } from './deletetree.component';

describe('DeletetreeComponent', () => {
  let component: DeletetreeComponent;
  let fixture: ComponentFixture<DeletetreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletetreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletetreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});