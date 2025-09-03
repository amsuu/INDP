import { Component, input } from '@angular/core';
import { AnswerButtonColoringService } from '../answer-button-coloring.service';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

// suspicious
import { ThemeService } from '../../settings/theme.service';
import { Question } from '../level-1-types';

@Component({
    selector: 'app-level-1-quiz-question',
    standalone: true,
    imports: [NgIf, RouterLink],
    templateUrl: './level-1-quiz-question.component.html',
    styleUrls: ['./level-1-quiz-question.component.scss']
})
export class Level1QuizQuestionComponent {

  convert = {
    CAse: function (s: string) {
      switch (s) {
        case "nomn": return "Nominative";
        case "accs": return "Accusative";
        case "gent": return "Genitive";
        case "loct": return "Locative";
        case "datv": return "Dative";
        case "ablt": return "Instrumental";
        case "voct": return "Vocative";
        default: return "";
      }
    },
    NMbr: function (s: string) {
      switch (s) {
        case "sing": return "Singular";
        case "plur": return "Plural";
        default: return "";
      }
    },
    GNdr: function (s: string) {
      switch (s) {
        case "masc": return "Masculine";
        case "femn": return "Feminine";
        case "neut": return "Neuter";
        default: return "";
      }
    },
  };

  question = input.required<Question>();
  showTitles = input<boolean>(false);
  noMargin = input<boolean>(false);
  // @Input() random: boolean = true;

  appropriateAnswerButtonText = 'Hint';

  ngOnInit() { }

  constructor(private coloring: AnswerButtonColoringService, private themeing: ThemeService) { }


  answerInputTyped(answerInput: HTMLInputElement, answerButton: HTMLButtonElement) {
    if (answerInput.value === '') {
      this.appropriateAnswerButtonText = "Hint";
    } else {
      this.appropriateAnswerButtonText = "Check";
    }
  }


  answerButtonClicked(answerInput: HTMLInputElement, answerButton: HTMLButtonElement, answerCardContainter: HTMLDivElement) {
    if (this.appropriateAnswerButtonText === 'Hint') {
      this.showHint(answerInput, answerButton);
      this.appropriateAnswerButtonText = 'Reveal';
    }
    else if (this.appropriateAnswerButtonText === 'Check') {
      this.checkAnswer(answerInput, answerButton, answerCardContainter);
    }
    else if (
      this.appropriateAnswerButtonText !== 'Incorrect' as string
    ||this.appropriateAnswerButtonText !== 'Correct' as string
    ) {
      this.revealAnswer(answerInput, answerButton);
    }
  }


  // Before input
  showHint(answerInput: HTMLInputElement, answerButton: HTMLButtonElement) {
    //
  }


  // During input
  checkAnswer(answerInput: HTMLInputElement, answerButton: HTMLButtonElement, answerCardContainter: HTMLDivElement) {


    // calling this function itself changes the button text
    let correct = this.verifyAnswerInput(answerInput)

    this.coloring.colorAppropriately(answerInput, correct);

    this.coloring.setBackgroundHSL(answerCardContainter,
      correct ? 'green' : 'red',
      this.themeing.isCurrentThemeName("light") ? 'accent' : 'secondary'
    );

    if (this.themeing.isCurrentThemeName("light")) {
      this.coloring.setForegroundVar(answerButton, 'background');
    }

    if (correct) {
      this.revealAnswer(answerInput, answerButton);
    } else {
      this.appropriateAnswerButtonText = "Reveal";
      // no revealAnswer here because we want the user to be able to
      // look at their mistakes before they view the right answer
      // instead we just change the text which will make the next
      // click of the answerbutton call revealAnswer.
    }

    answerInput.disabled = true;
  }


  // After hint + while no input
  revealAnswer(answerInput: HTMLInputElement, answerButton: HTMLButtonElement) {
    this.verifyAnswerInput(answerInput);
    answerInput.value = this.question().answer;
    this.lock(answerInput);
    this.lock(answerButton);
    answerButton.blur();
  }


  lock(element: HTMLInputElement | HTMLButtonElement) {
    element.disabled = true;
  }


  isAnswerCorrect(answerInput: HTMLInputElement) {
    return (answerInput.value === this.question().answer);
  }
  verifyAnswerInput(answerInput: HTMLInputElement) {
    const answerIsCorrect = this.isAnswerCorrect(answerInput);
    if (answerIsCorrect) {
      this.appropriateAnswerButtonText = "Correct";
    }
    else {
      this.appropriateAnswerButtonText = "Correct answer";
    }
    return answerIsCorrect;
  }
}
