export type Quiz = {
  author: string,
  title: string,
  questions: Question[],
};

type Disambig = {
  PoS?: string,
  gender?: string,
  number?: string,
  case?: string,
};
type Declension = {
    case: string,
    number: string,
    gender: string,  // only for adj.
};

export class Target {
  target: Declension;
  disambig?: Disambig;

  constructor(target: Declension, disambig?: Disambig) {
    this.disambig = disambig;
    this.target = target;
  }
};

export class Question {
  word: string;
  target: Target;  // used for hint as well

  constructor(word: string, target: Target) {
    let disamb = {};
    if (target.disambig) {
      if (target.disambig.PoS) {

      }
    }
  }
};
