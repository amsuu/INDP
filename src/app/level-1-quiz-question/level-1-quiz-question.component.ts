import { Component, Input } from '@angular/core';
import { InputLabelClassKey } from '@material-ui/core';

@Component({
  selector: 'app-level-1-quiz-question',
  templateUrl: './level-1-quiz-question.component.html',
  styleUrls: ['./level-1-quiz-question.component.scss']
})
export class Level1QuizQuestionComponent {
  @Input() word: string = '';
  @Input() case: string = '';
  @Input() number: string = '';
  @Input() answer: string = '';
  @Input() showTitles: boolean = false;
  // @Input() random: boolean = true;

  appropriateAnswerButtonText = 'Hint';
  
  ngOnInit() { }

  constructor() { }


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
      this.appropriateAnswerButtonText !== 'Wrong' as string
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
    if (this.verifyAnswerInput(answerInput)) {

      if (document.body.getAttribute('theme') === 'dark') {
        answerInput.setAttribute("style", `
          color: var(--background) !important;
          background-color: hsl(var(--hue-green), var(--accent-sl));
        `);
      } else {
        answerInput.setAttribute("style", `
          color: var(--text) !important;
          background-color: hsl(var(--hue-green), var(--secondary-sl)) !important;
        `);
        answerCardContainter.setAttribute("style", `
          background-color: hsl(var(--hue-green), var(--accent-sl));
        `);
        answerButton.setAttribute("style", 
          `color: var(--background);
        `);
      }

      this.revealAnswer(answerInput, answerButton);

    } else {

      if (document.body.getAttribute('theme') === 'dark') {
        answerInput.setAttribute("style", `
          color: var(--background) !important;
          background-color: hsl(var(--hue-red), var(--accent-sl));
        `);
      } else {
        answerInput.setAttribute("style", `
          color: var(--text) !important;
          background-color: hsl(var(--hue-red), var(--secondary-sl)) !important;
        `);
        answerCardContainter.setAttribute("style", `
          background-color: hsl(var(--hue-red), var(--accent-sl));
        `);
        answerButton.setAttribute("style", 
          `color: var(--background);
        `);
      }

      this.appropriateAnswerButtonText = "Reveal";

      // no revealAnswer here because we want the user to be able to
      // look at their mistakes before they view the right answer
      // instead we just change the text which will make the next
      // click of the answerbutton call revealAnswer.
    }
  }


  // After hint + while no input
  revealAnswer(answerInput: HTMLInputElement, answerButton: HTMLButtonElement) {
    this.verifyAnswerInput(answerInput);
    answerInput.value = this.answer;
    this.lock(answerInput);
    this.lock(answerButton);
  }


  lock(element: HTMLInputElement | HTMLButtonElement) {
    element.disabled = true;
  }


  isAnswerCorrect(answerInput: HTMLInputElement) {
    return (answerInput.value === this.answer);
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
