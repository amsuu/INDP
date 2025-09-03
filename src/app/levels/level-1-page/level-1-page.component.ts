import { Component, input, OnInit } from '@angular/core';
import { NgFor, NgIf } from "@angular/common";
import { ButtonsOverlayComponent } from '../buttons-overlay/buttons-overlay.component';
import { Level1QuizQuestionComponent } from '../level-1-quiz-question/level-1-quiz-question.component';
import { Quiz } from '../level-1-types';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-level1page',
    templateUrl: './level-1-page.component.html',
    styleUrls: ['./level-1-page.component.scss'],
    standalone: true,
    imports: [ButtonsOverlayComponent, RouterLink, NgIf, NgFor, Level1QuizQuestionComponent]
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
    this.http.get<Quiz>('/amsuu_level-1-example-quiz.json').subscribe(json => {
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

