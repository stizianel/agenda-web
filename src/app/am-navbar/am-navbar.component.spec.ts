import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmNavbarComponent } from './am-navbar.component';

describe('AmNavbarComponent', () => {
  let component: AmNavbarComponent;
  let fixture: ComponentFixture<AmNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
