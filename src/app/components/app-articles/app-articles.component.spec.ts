import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppArticlesComponent } from './app-articles.component';

describe('AppArticlesComponent', () => {
  let component: AppArticlesComponent;
  let fixture: ComponentFixture<AppArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
