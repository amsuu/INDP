import { Component } from '@angular/core';
import { Quiz, QuestionFactory, Question } from '../level-2-types';
import { NgFor, NgIf } from '@angular/common';
import { Level2QuizQuestionComponent } from '../level-2-quiz-question/level-2-quiz-question.component';
import { SegmentedSingleSelectionComponent } from '../../settings/segmented-single-selection/segmented-single-selection.component';
import { AzService } from '../../az/az.service';
import { Declension, Disambig } from '../level-types';
import { cases, numbers } from '../../az/utils';

const disgen = ['', 'masc', 'femn', 'neut'];
const tarnum = [...numbers];
const tarcas = [...cases];

@Component({
  selector: 'app-level-2-creator',
  standalone: true,
  imports: [NgFor, NgIf, Level2QuizQuestionComponent, SegmentedSingleSelectionComponent],
  templateUrl: './level-2-creator.component.html',
  styleUrl: './level-2-creator.component.scss'
})
export class Level2CreatorComponent {
  protected disgenSelection = 0;
  protected tarnumSelection = 0;
  protected tarcasSelection = 0;

  inputMode: 'word'|'sentence'|'none' = 'none';

  quiz: Quiz = {
    author: "unknown",
    title: "unknown",
    questions: []
  };

  currentQuestion: Question = {
    phrase: [],
    placeholders: [],
    disambigs: [],
    targets: [],
    correctAnswers: [],
  };

  constructor(private azS: AzService) { }

  confirmLast() {

  }

  addWord() {
    this.confirmLast();
    this.inputMode = 'word';
  }

  addToSentence() {
    this.confirmLast();
    this.inputMode = 'sentence';
  }

  addQuestion() {

  }

  export(author: HTMLInputElement, title: HTMLInputElement) {

    // 1. validate
    if (author.value !== '') this.quiz.author = author.value;
    if (title.value !== '') this.quiz.title = title.value;

    // 2. download (i copied this code from somewhere)
    // prepare download
    const json = JSON.stringify(this.quiz);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    // start download
    const a = document.createElement('a');
    a.href = url;
    a.download = `${this.quiz.author}_${this.quiz.title}.json`;
    a.click();

    // finish download
    URL.revokeObjectURL(url);
  }
}
