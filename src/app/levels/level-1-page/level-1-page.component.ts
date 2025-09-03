import { Component, input, OnInit } from '@angular/core';
import { NgFor } from "@angular/common";
import { ButtonsOverlayComponent } from '../buttons-overlay/buttons-overlay.component';
import { Level1QuizQuestionComponent } from '../level-1-quiz-question/level-1-quiz-question.component';
import { Quiz } from '../level-1-types';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-level1page',
    templateUrl: './level-1-page.component.html',
    styleUrls: ['./level-1-page.component.scss'],
    standalone: true,
    imports: [ButtonsOverlayComponent, NgFor, Level1QuizQuestionComponent]
})
export class Level1pageComponent implements OnInit {

  constructor (private http: HttpClient) { }

  quizInput = input<Quiz|false>();
  quiz: Quiz = {
    author: "",
    title: "",
    questions: []
  };
  len = 0;

  ngOnInit() {
    this.http.get<Quiz>('/amsuu_l1-example-quiz.json').subscribe(json => {
      this.quiz = json;
      this.len = this.quiz.questions.length;
      console.log(this.quiz);
    });
  }
}

