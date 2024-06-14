import { Component, Input } from '@angular/core';

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

  appropriateAnswerButtonText: "Hint" | "Reveal" | 'Check' = 'Hint';
  
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
    } else if (this.appropriateAnswerButtonText === 'Check') {
      this.checkAnswer(answerInput, answerButton);
      this.appropriateAnswerButtonText = 'Reveal'
    }  else if (this.appropriateAnswerButtonText === 'Reveal') {
      this.revealAnswer(answerInput, answerButton);
    }
  }

  showHint(answerInput: HTMLInputElement, answerButton: HTMLButtonElement) {
    
  }
  checkAnswer(answerInput: HTMLInputElement, answerButton: HTMLButtonElement) {

  }
  revealAnswer(answerInput: HTMLInputElement, answerButton: HTMLButtonElement) {

  }
}
