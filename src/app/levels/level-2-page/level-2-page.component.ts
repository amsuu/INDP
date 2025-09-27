import { Component, input } from '@angular/core';
import { Level2QuizQuestionComponent } from "../level-2-quiz-question/level-2-quiz-question.component";
import { ButtonsOverlayComponent } from '../buttons-overlay/buttons-overlay.component';
import { NgFor } from '@angular/common';
import { Question, QuestionFactory } from '../level-2-types';

@Component({
    selector: 'app-level-2-page',
    standalone: true,
    imports: [ButtonsOverlayComponent, NgFor, Level2QuizQuestionComponent],
    templateUrl: './level-2-page.component.html',
    styleUrls: ['./level-2-page.component.scss'],
})
export class Level2PageComponent {

  questions = input<Question[]>([
    {
      disambigs: [],
      targets: [],
      phrase: [
        "Ja vidžu", "", "", ".",
      ],
      placeholders: [
        "dobry", "mųž",
      ],
      correctAnswers: [
        "dobrogo", "mųža",
      ],
    },
    {
      disambigs: [],
      targets: [],
      phrase: [
        "Ona dala", "", "", "", "jej", ".",
      ],
      placeholders: [
        "jejina", "kniga", "prijateĺ",
      ],
      correctAnswers: [
        "jejinų", "knigų", "prijatelju",
      ],
    },
  ]);

  len = this.questions().length;
}
