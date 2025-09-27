import { Component, input, OnInit } from '@angular/core';
import { Level2QuizQuestionComponent } from "../level-2-quiz-question/level-2-quiz-question.component";
import { ButtonsOverlayComponent } from '../buttons-overlay/buttons-overlay.component';
import { NgFor } from '@angular/common';
import { Question, QuestionFactory, Quiz } from '../level-2-types';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-level-2-page',
    standalone: true,
    imports: [ButtonsOverlayComponent, NgFor, RouterLink, Level2QuizQuestionComponent],
    templateUrl: './level-2-page.component.html',
    styleUrls: ['./level-2-page.component.scss'],
})
export class Level2PageComponent implements OnInit {

  constructor (private http: HttpClient) { }

  questions = input<Question[]>([]);

  quizInput = input<Quiz|false>();
  quiz: Quiz = {
    author: "",
    title: "",
    questions: []
  };
  len = 0;

  ngOnInit(): void {
    this.http.get<Quiz>('/amsuu_level-2-example-quiz.json').subscribe(json => {
      this.quiz = json;
      this.len = this.quiz.questions.length;
      console.log(this.quiz);
    });
  }

  import(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) return;

    const file = input.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      try {
        this.quiz = JSON.parse(reader.result as string);
      } catch (err) {
        console.error('Invalid JSON file:', err);
        alert('Invalid JSON file');
      }
    };

    reader.readAsText(file);
  }
}
