import { Component, Input, ElementRef, Renderer2 } from '@angular/core';
import { AnswerButtonColoringService } from '../answer-button-coloring.service';

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
   * An empty string means a place for an input.
   */
  @Input() phrase = ['Ja vidžų', '', '', '.'];
  /**
   * These are the placeholders (the pre-text that disappears when you
   * type something) of the input elements in the blank spots of the
   * phrase.
   * Analagous to Level-1's "root words"
   */
  @Input() placeholders = ['dobry', 'mųž'];
  /**
   * These are the correct forms of the placeholder words.
   * ! (when inflection by code is implimented, this should change too)
   * The length must be the same as placeholders.length.
   */
  @Input() correctAnswers = ['dobrogo', 'mųža'];

  phraseToPlaceholderMap: number[] = [ ]

  constructor(private el: ElementRef, private renderer: Renderer2, private coloring: AnswerButtonColoringService) {

    // the following initiates the phraseToPlaceholderMap element.
    // the idea is to make a map between the indexes of the
    // elements in "phrase" which are empty (stand-ins for
    // the input fields in the final question) and the indexes
    // of the elements in the arrays of "placeholders" and
    // "correctAnswers" since these are inherintly out-of-sync

    let tracker = 0;
    for (let i = 0; i < this.phrase.length; i++) {
      let phraseEl = this.phrase[i];
      if (phraseEl === '') {
        this.phraseToPlaceholderMap[i] = tracker;
        tracker++;
      }
    }
  }


  getPlaceholderFromPhrase(i: number) {
    return this.placeholders[this.phraseToPlaceholderMap[i]];
  }

  inputted(input: HTMLInputElement) {
    input.style.width = input.value.length === 0 ? '100%' : (input.value.length + 3) + 'ch';
  }

  hint(hintButton: HTMLButtonElement) {

  }

  checkAnswers(hintButton: HTMLButtonElement, checkButton: HTMLButtonElement) {
    let inputs = this.el.nativeElement.querySelectorAll('input');
    let correct = true;
    let incorrects: number[] = [];

    for (let i = 0; i < inputs.length; i++) {
      const input = inputs[i];

      if (input.value !== this.correctAnswers[i]) {
        correct = false;
        incorrects.push(i);
      }
    }
    for (let i = 0; i < inputs.length; i++) {
      const input = inputs[i];
      this.coloring.colorAppropriately(input, !incorrects.includes(i), {
        slOverride: {light: 'secondary20', dark: 'secondary20'}
      });
      this.coloring.setForeground(input, 'var(--text) !important');
    }
    if (correct) {
      this.correctAnswer(hintButton, checkButton);
    } else {
      this.incorrectAnswer(hintButton, checkButton);
    }
  }


  incorrectAnswer(hintButton: HTMLButtonElement, checkButton: HTMLButtonElement) {
  }

  correctAnswer(hintButton: HTMLButtonElement, checkButton: HTMLButtonElement) {
  }
}
