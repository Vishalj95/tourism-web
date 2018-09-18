import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBlogComponent } from './app-blog.component';

describe('AppBlogComponent', () => {
  let component: AppBlogComponent;
  let fixture: ComponentFixture<AppBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
