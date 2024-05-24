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
  // @Input() random: boolean = true;

  appropriateAnswerButtonText: "Hint" | "Reveal" = 'Hint';
  
  ngOnInit() { }

  constructor () { }

  answerInputTyped(answerInput: HTMLInputElement, answerButton: HTMLButtonElement) {
    if (answerInput.value == '') {
      answerButton.innerText = "Check";
    } else {
      answerButton.innerText = this.appropriateAnswerButtonText;
    }
  }

  answerButtonClicked(answerButton: HTMLButtonElement) {

    console.log('s')

    if (this.appropriateAnswerButtonText == 'Hint') {
      this.appropriateAnswerButtonText = 'Reveal'
      this.showHint();
    }
  }

  showHint() {
    
  }
}
