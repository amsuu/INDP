import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-level-1-quiz-question',
  templateUrl: './level-1-quiz-question.component.html',
  styleUrls: ['./level-1-quiz-question.component.scss']
})
export class Level1QuizQuestionComponent {
  @Input() word: string = '';
  @Input() case: string = '';
  @Input() answer: string = '';
  @Input() random: boolean = true;

  
  ngOnInit() {
    
  }

}
