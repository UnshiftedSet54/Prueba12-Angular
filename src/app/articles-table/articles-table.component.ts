import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-articles-table',
  standalone: true,
  imports: [ RouterLink ],
  templateUrl: './articles-table.component.html',
  styleUrl: './articles-table.component.css'
})
export class ArticlesTableComponent implements OnInit{
  articles: Array<any> = []

  constructor(private ArticlesService: ArticlesService){}

  ngOnInit(): void {
    this.articles = this.ArticlesService.getArticles()
  }
}
