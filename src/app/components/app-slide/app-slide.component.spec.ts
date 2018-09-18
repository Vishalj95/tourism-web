import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSlideComponent } from './app-slide.component';

describe('AppSlideComponent', () => {
  let component: AppSlideComponent;
  let fixture: ComponentFixture<AppSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
