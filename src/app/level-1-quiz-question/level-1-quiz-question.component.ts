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

  constructor () { }

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
    else if (this.appropriateAnswerButtonText === 'Reveal') {
      this.revealAnswer(answerInput, answerButton);
    }
  }

  // Before input
  showHint(answerInput: HTMLInputElement, answerButton: HTMLButtonElement) {
    
  }
  // During input
  checkAnswer(answerInput: HTMLInputElement, answerButton: HTMLButtonElement, answerCardContainter: HTMLDivElement) {
    if (this.verifyAnswerInput(answerInput)) {
      this.revealAnswer(answerInput, answerButton);
    } else {
      // answerInput.style.textDecoration = "line-through 0.1rem hsl(var(--hue-red), var(--accent-sl))";
      if (document.body.getAttribute('theme') === 'dark') {
        answerInput.setAttribute("style", "color: var(--background) !important; background-color: hsl(var(--hue-red), var(--accent-sl));");
      } else {
        answerInput.setAttribute("style", "color: var(--text) !important; background-color: hsl(var(--hue-red), var(--secondary-sl)) !important;");
        answerCardContainter.setAttribute("style", "background-color: hsl(var(--hue-red), var(--accent-sl));");
        answerButton.setAttribute("style", "color: var(--background);");
      }
      this.appropriateAnswerButtonText = "Reveal";
    }
  }
  // After hint + while no input
  revealAnswer(answerInput: HTMLInputElement, answerButton: HTMLButtonElement) {
    this.verifyAnswerInput(answerInput);
    answerInput.value = this.answer;
    this.lockAnswer(answerInput);
  }


  lockAnswer(answerinput: HTMLInputElement) {
    answerinput.setAttribute('disabled', 'true');
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
      this.appropriateAnswerButtonText = "Wrong";
    }
    return answerIsCorrect;
  }
}
