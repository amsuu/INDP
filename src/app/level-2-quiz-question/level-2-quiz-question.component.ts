import { I18nPluralPipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-level-2-quiz-question',
  templateUrl: './level-2-quiz-question.component.html',
  styleUrls: ['./level-2-quiz-question.component.scss']
})
export class Level2QuizQuestionComponent {
  /**
   * The phrase, where each time the string is broken up into
   * different elements of the array, that represents a gap
   * in the UI, where the correct form is wanted.
   */
  @Input() phrase = [''];
  /**
   * These are the placeholders (the pre-text that disappears when you
   * type something) of the input elements in the blank spots of the
   * phrase.
   * Analagous to Level-1's "root words"
   */
  @Input() placeholders = [''];
  /**
   * These are the correct forms of the placeholder words.
   * ! (when inflection by code is implimented, this should change too)
   * The length must be the same as placeholders.length.
   */
  @Input() correctAnswers = [''];

  constructor() {

  }


}
