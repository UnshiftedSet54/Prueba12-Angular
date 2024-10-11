import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  articles: Array<any> = []

  constructor() { }

  getArticles(): Array<any> {
    console.log(this.articles)
    return this.articles
  }

  setNewArticle(article: Object): void {
    this.articles = [...this.articles, article]
    console.log(this.articles)
  }
}
