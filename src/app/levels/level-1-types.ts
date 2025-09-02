import { AzService } from "../az/az.service";
import { AzClass } from "../az/azts";

export type Quiz = {
  author: string,
  title: string,
  questions: Question[],
};

export type Disambig = {
  PoS?: string,
  gender?: string,
  number?: string,
  case?: string,
};
export type Declension = {
    CAse: string,
    NMbr: string,
    GNdr?: string,  // only for adj.
};

export class Target {
  target: Declension;
  disambig: Disambig;

  constructor(target: Declension, disambig: Disambig) {
    this.disambig = disambig;
    this.target = target;
  }
};

class Question {
  word: string;
  target: Declension;  // used for hint as well
  correct: string;

  constructor(word: string, target: Declension, correct: string) {
    this.word = word;
    this.target = target;
    this.correct = correct;
  }
};

export function QuestionFactory(az: AzClass, word: string, target: Target): Question | false {
  let azS = new AzService();

  let infl = azS.inflectNoun(az, word, target.disambig, target.target);

  if (!infl) {
    console.error('unable to declense');
    return false;
  } else {
    return new Question(word, target.target, infl.word);
  }
}
