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

export class Question {
  word: string;
  target: Declension;  // used for hint as well
  answer: string;

  constructor(word: string, target: Declension, correct: string) {
    this.word = word;
    this.target = target;
    this.answer = correct;
  }
};

export function QuestionFactory(az: AzClass, word: string, target: Target): Question | false {
  let azS = new AzService();

  let infl = azS.inflectNoun(az, word, target.disambig, target.target);
  if (!infl) return false;

  return new Question(word, target.target, infl.word);
}
