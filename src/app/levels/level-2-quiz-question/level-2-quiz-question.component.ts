import { Component, Input } from '@angular/core';
import { AnswerButtonColoringService } from '../answer-button-coloring.service';
import { NgFor, NgIf } from '@angular/common';

export type Level2Question = {
  phrase: string[],
  placeholders: string[],
  correctAnswers: string[],
};

@Component({
    selector: 'app-level-2-quiz-question',
    templateUrl: './level-2-quiz-question.component.html',
    styleUrls: ['./level-2-quiz-question.component.scss'],
    standalone: true,
    imports: [NgFor, NgIf]
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

  @Input({ required: true }) id = 0;

  constructor(private coloring: AnswerButtonColoringService) { }

  convertPhraseIndex(p: number) {
    let tracker = -1;
    for (let i = 0; i < this.phrase.length; i++) {
      if (this.phrase[i] === "") {
        tracker++;
      }
      if (i === p) {
        break;
      }
    }
    return tracker;
  }

  getPlaceholderFromPhrase(p: number) {
    let i = this.convertPhraseIndex(p);
    return this.placeholders[i];
  }

  inputted(input: HTMLInputElement) {
    input.style.width = input.value.length === 0 ? '100%' : (input.value.length + 3) + 'ch';
  }

  hint(hintButton: HTMLButtonElement, questionWrapper: HTMLDivElement) {

  }

  checkAnswers(hintButton: HTMLButtonElement, checkButton: HTMLButtonElement, phraseWrapper: HTMLDivElement) {
    let inputs: HTMLInputElement[] = [];
    Array.from(phraseWrapper.children).forEach(child => {
    if (child.classList.contains('level-2-empty')) {

      Array.from((child as HTMLElement).children).forEach(wrapper => {
      if (wrapper.classList.contains('input-wrapper')) {

        Array.from((wrapper as HTMLElement).children).forEach(widthElement_or_inputElement => {
        if (widthElement_or_inputElement.tagName === 'INPUT') {

          inputs.push(widthElement_or_inputElement as HTMLInputElement);

        }});

      }});

    }});



    let correct = true;
    let anyIncorrect = false;

    for (let i = 0; i < inputs.length; i++) {
      const input = inputs[i];

      if (input.value !== this.correctAnswers[i]) {
        correct = false;
        anyIncorrect = true;
      } else {
        correct = true;
      }

      let coloring = this.coloring.copyDefaultColoring();
      coloring['correct']['dark']['default'] = {
        text: 'text',
        bg: {
          hue: 'green',
          sl: 'secondary20',
        }
      };
      coloring['correct']['light']['default'] = {
        text: 'text',
        bg: {
          hue: 'green',
          sl: 'secondary20',
        }
      };

      coloring['incorrect']['light']['default'] = {
        text: 'text',
        bg: {
          hue: 'red',
          sl: 'secondary20',
        }
      };
      coloring['incorrect']['dark']['default'] = {
        text: 'text',
        bg: {
          hue: 'red',
          sl: 'secondary20',
        }
      };
      console.log(coloring);
      this.coloring.colorAppropriately(input, correct, coloring);
      if (correct) {
        this.correctAnswer(input);
      } else {
        this.incorrectAnswer(hintButton, checkButton);
      }
    }
    if (anyIncorrect) {
      this.anyIncorrect(checkButton);
    } else {
      this.allCorrect(hintButton, checkButton);
    }
  }

  anyIncorrect(checkButton: HTMLButtonElement) {
    checkButton.innerText = "Try Again";
  }

  allCorrect(hintButton:HTMLButtonElement, checkButton: HTMLButtonElement) {
    checkButton.innerText = "Correct!";
    checkButton.disabled = true;

    let coloring = this.coloring.copyDefaultColoring();
    coloring['correct']['dark']['default'] = {
      text: 'text',
      bg: {
        hue: 'green',
        sl: 'secondary',
      }
    };
    coloring['correct']['light']['default'] = {
      text: 'text',
      bg: {
        hue: 'green',
        sl: 'secondary',
      }
    };

    coloring['incorrect']['dark']['default'] = {
      text: 'text',
      bg: {
        hue: 'red',
        sl: 'secondary',
      }
    };
    coloring['incorrect']['light']['default'] = {
      text: 'text',
      bg: {
        hue: 'red',
        sl: 'secondary',
      }
    };

    this.coloring.colorAppropriately(checkButton, true, coloring);

    hintButton.style.display = "none";
  }

  incorrectAnswer(hintButton: HTMLButtonElement, checkButton: HTMLButtonElement) {

  }

  correctAnswer(input: HTMLInputElement) {
    input.disabled = true;
  }
}
