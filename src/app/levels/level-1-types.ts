import { AzService } from "../az/az.service";
import { AzClass } from "../az/azts";
import { DeclensedWord, Declension, Disambig } from "./level-types";

export type Quiz = {
  author: string,
  title: string,
  questions: Question[],
};

export type Target = {
  target: Declension;
  disambig: Disambig;
};

export type Question = DeclensedWord&{
  answer: string;
};

export function QuestionFactory(az: AzClass, word: string, target: Target): Question | false {
  let azS = new AzService();

  let infl = azS.inflectNoun(az, word, target.disambig, target.target);
  if (!infl) return false;

  let question: Question = {
    word: word,
    disambig: target.disambig,
    target: target.target,
    answer: infl.word,
  };

  return question;
}
