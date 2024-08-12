import { Component, Input } from '@angular/core';
import { InputLabelClassKey } from '@material-ui/core';
import { AnswerButtonColoringService } from '../answer-button-coloring.service';

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

  constructor(private coloring: AnswerButtonColoringService) { }


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

    if (correct) {

      if (document.body.getAttribute('theme') === 'light') {
        this.coloring.addStyle(answerCardContainter, 'background-color: hsl(var(--hue-green), var(--accent-sl));');
        this.coloring.addStyle(answerButton, 'color: var(--background);');
      }
      this.revealAnswer(answerInput, answerButton);

    } else {

      if (document.body.getAttribute('theme') !== 'dark') {
        this.coloring.addStyle(answerCardContainter, 'background-color: hsl(var(--hue-red), var(--accent-sl));');
        this.coloring.addStyle(answerButton, 'color: var(--background);');
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
    answerButton.blur();
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
