import { Routes } from '@angular/router';
import { ArticleFormComponent } from './article-form/article-form.component';
import { ArticlesTableComponent } from './articles-table/articles-table.component';

export const routes: Routes = [
  {path: '', component: ArticleFormComponent},
  {path: 'table', component: ArticlesTableComponent},
  {path: '**', redirectTo: '/'}
];
