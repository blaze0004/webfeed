import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebfeedComponent } from './webfeed.component';

describe('WebfeedComponent', () => {
  let component: WebfeedComponent;
  let fixture: ComponentFixture<WebfeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebfeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebfeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
