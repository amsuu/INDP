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

  appropriateAnswerButtonText
    : "Hint"
    | "Reveal"
    | "Check"
    | "Correct"
    | "False"
  = 'Hint';
  
  ngOnInit() { }

  constructor () { }

  answerInputTyped(answerInput: HTMLInputElement, answerButton: HTMLButtonElement) {
    if (answerInput.value === '') {
      this.appropriateAnswerButtonText = "Hint";
    } else {
      this.appropriateAnswerButtonText = "Check";
    }
  }

  answerButtonClicked(answerInput: HTMLInputElement, answerButton: HTMLButtonElement) {
    
    if (this.appropriateAnswerButtonText === 'Hint') {
      this.showHint(answerInput, answerButton);
      this.appropriateAnswerButtonText = 'Reveal';
    }
    else if (this.appropriateAnswerButtonText === 'Check') {
      this.checkAnswer(answerInput, answerButton);
      this.appropriateAnswerButtonText = 'Reveal'
    }
    else if (this.appropriateAnswerButtonText === 'Reveal') {
      this.revealAnswer(answerInput, answerButton);
    }
  }

  // Before input
  showHint(answerInput: HTMLInputElement, answerButton: HTMLButtonElement) {
    
  }
  // During input
  checkAnswer(answerInput: HTMLInputElement, answerButton: HTMLButtonElement) {

  }
  // After hint + while no input
  revealAnswer(answerInput: HTMLInputElement, answerButton: HTMLButtonElement) {
    this.verifyAnswerInput(answerInput, answerButton)
    answerInput.value = this.answer;
    this.lockAnswer(answerInput, answerButton);
  }


  lockAnswer(answerinput: HTMLInputElement, answerButton: HTMLButtonElement) {
    answerinput.setAttribute('disabled', 'true');
  }

  verifyAnswerInput(answerInput: HTMLInputElement, answerButton: HTMLButtonElement) {
    const currAns = answerInput.value;

    if (currAns === this.answer) {
      this.appropriateAnswerButtonText = "Correct";
    }
    else if (currAns !== this.answer) {
      this.appropriateAnswerButtonText = "False";
    }
  }
}
