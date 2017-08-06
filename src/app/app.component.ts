import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  articles: Article[];

  constructor() {
    this.articles = [
      new Article("Angular","https://angular.io"),
      new Article("BBC", "http://bbc.co.uk", 10),
      new Article("My site", "http://jamesthomasfarrell.uk", 99)
    ]
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    this.articles.push(new Article(title.value, link.value));
    title.value = '';
    link.value = '';
    return false;
  }

  sortArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }

}
