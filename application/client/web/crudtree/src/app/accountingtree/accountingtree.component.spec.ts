import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingtreeComponent } from './accountingtree.component';

describe('AccountingtreeComponent', () => {
  let component: AccountingtreeComponent;
  let fixture: ComponentFixture<AccountingtreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountingtreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountingtreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});