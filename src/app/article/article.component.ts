import { Component, OnInit, Input } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  host: {class: "row"} //This tells Angular that on the host element (the app-article tag) we want to set the class attribute to have “row”.

})
export class ArticleComponent implements OnInit {

  @Input() article: Article;

  constructor() {
  }

   voteUp(): boolean {
     this.article.votes += 1;
     return false;
   }

   voteDown(): boolean {
     if(this.article.votes > 0) {
       this.article.votes -= 1;
       return false;
     } else {
       return false;
     }
   }

  ngOnInit() {
  }

}
