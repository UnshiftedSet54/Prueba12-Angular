import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesTableComponent } from './articles-table.component';

describe('ArticlesTableComponent', () => {
  let component: ArticlesTableComponent;
  let fixture: ComponentFixture<ArticlesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticlesTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticlesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
