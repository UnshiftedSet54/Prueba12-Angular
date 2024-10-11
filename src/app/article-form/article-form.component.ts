import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-article-form',
  standalone: true,
  imports: [ RouterLink, ReactiveFormsModule ],
  templateUrl: './article-form.component.html',
  styleUrl: './article-form.component.css'
})
export class ArticleFormComponent implements OnInit{
  formArticle: any = []

  constructor(private ArticlesService: ArticlesService){}

  ngOnInit(): void {
    this.formArticle = new FormGroup({
      name: new FormControl(''),
      description: new FormControl(''),
      brand: new FormControl(''),
      dimensions: new FormControl(''),
      wheight: new FormControl(''),
      stock: new FormControl(1),
    })
  }

  addArticle(): any {
    this.ArticlesService.setNewArticle(this.formArticle.value)
  }
}
