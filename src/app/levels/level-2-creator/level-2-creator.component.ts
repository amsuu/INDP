import { Component } from '@angular/core';
import { Quiz, QuestionFactory, Question, WordFieldFactory, WordField } from '../level-2-types';
import { NgFor, NgIf } from '@angular/common';
import { Level2QuizQuestionComponent } from '../level-2-quiz-question/level-2-quiz-question.component';
import { SegmentedSingleSelectionComponent } from '../../settings/segmented-single-selection/segmented-single-selection.component';
import { AzService } from '../../az/az.service';
import { Declension, Disambig } from '../level-types';
import { cases, numbers } from '../../az/utils';
import { convertPhraseIndex } from '../level-2-quiz-question/utils';

const tarnum = [...numbers];
const tarcas = [...cases];

const emptyQuestion: Question = new Question([], []);

@Component({
  selector: 'app-level-2-creator',
  standalone: true,
  imports: [NgFor, NgIf, Level2QuizQuestionComponent, SegmentedSingleSelectionComponent],
  templateUrl: './level-2-creator.component.html',
  styleUrl: './level-2-creator.component.scss'
})
export class Level2CreatorComponent {
  protected tarnumSelection = 0;
  protected tarcasSelection = 0;
  protected convertPhraseIndex = convertPhraseIndex;
  protected format = (wf: WordField) => wf.placeholder + ' → ' + wf.correctAnswer;

  inputMode: 'word'|'sentence'|'none' = 'none';

  quiz: Quiz = {
    author: "unknown",
    title: "unknown",
    questions: []
  };

  currentQuestion: Question = emptyQuestion;

  constructor(private azS: AzService) { }

  addLastField(word: HTMLInputElement, sentence: HTMLInputElement, after: any = ()=>{}) {
    if (this.inputMode === 'sentence' && sentence.value !== '') this.addSentenceField(sentence, after);
    else if (this.inputMode === 'word' && word.value !== '') this.addWordField(word, after);
    else after();
  }
  addSentenceField(sentence: HTMLInputElement, after: any = ()=>{}) {
    // push the sentence field
    this.currentQuestion.phrase.push(sentence.value);
    // clear UI
    sentence.value = "";
    after();
  }
  addWordField(word: HTMLInputElement, after: any = ()=>{}) {

    // 1. prepare disambiguation:
    let disambig: Disambig = {
      PoS: 'NOUN',
      case: 'nomn',
      number: 'sing',
    };  // defaults
    // if user selects, override:
    let disgen = document.getElementById("gender") as HTMLSelectElement;
    if (disgen.value !== '') disambig.gender = disgen.value;


    // 2. prepare target:
    let target: Declension = {
      CAse: tarcas[this.tarcasSelection],
      NMbr: tarnum[this.tarnumSelection],
    };  // defaults


    // 3. attempt to declense
    this.azS.loadThen(az => {
      let x = WordFieldFactory(az, word.value, disambig, target);

      if (!x) { alert("failed"); }
      else {
        // push the required per standard blank placeholder
        this.currentQuestion.phrase.push("");
        // push the final word field
        this.currentQuestion.wordFields.push(x);
        // clear UI
        word.value = "";
        after();
      }
    });
  }

  newWordField(word: HTMLInputElement, sentence: HTMLInputElement) {
    this.addLastField(word, sentence);
    this.inputMode = 'word';
  }
  newSentenceField(word: HTMLInputElement, sentence: HTMLInputElement) {
    this.addLastField(word, sentence);
    this.inputMode = 'sentence';
  }
  finish(punctuation: string, word: HTMLInputElement, sentence: HTMLInputElement) {
    this.addLastField(word, sentence, () => {
      this.currentQuestion.phrase.push(punctuation);
      this.inputMode = 'none';
    });
  }
  addQuestion(word: HTMLInputElement, sentence: HTMLInputElement) {
    this.addLastField(word, sentence, () => {
      this.quiz.questions.push(this.currentQuestion);
      this.currentQuestion = emptyQuestion;
    });
  }

  export(author: HTMLInputElement, title: HTMLInputElement) {

    // 1. validate
    if (author.value !== '') this.quiz.author = author.value;
    if (title.value !== '') this.quiz.title = title.value;

    // 2. download (i copied this code from somewhere)
    // prepare download
    const json = JSON.stringify(this.quiz);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    // start download
    const a = document.createElement('a');
    a.href = url;
    a.download = `${this.quiz.author}_${this.quiz.title}.json`;
    a.click();

    // finish download
    URL.revokeObjectURL(url);
  }
}
