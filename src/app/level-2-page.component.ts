import { Component, Input } from '@angular/core';
import { Level2Question, Level2QuizQuestionComponent } from "../level-2-quiz-question/level-2-quiz-question.component";
import { ButtonsOverlayComponent } from '../buttons-overlay/buttons-overlay.component';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-level-2-page',
    templateUrl: './level-2-page.component.html',
    styleUrls: ['./level-2-page.component.scss'],
    standalone: true,
    imports: [ButtonsOverlayComponent, NgFor, Level2QuizQuestionComponent]
})
export class Level2PageComponent {

  @Input() questions: Level2Question[] = [
    {
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
      phrase: [
        "Ona dala", "", "", "k", "", "jej", ".",
      ],
      placeholders: [
        "jejina", "kniga", "prijateĺ",
      ],
      correctAnswers: [
        "jejinų", "knigų", "prijatelju",
      ],
    },
  ];
  len = this.questions.length;
}