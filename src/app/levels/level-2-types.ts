import { AzService } from "../az/az.service";
import { AzClass } from "../az/azts";
import { Disambig, Declension, DeclensedWord } from "./level-types";

export type Quiz = {
  author: string,
  title: string,
  questions: Question[],
};

export type WordField = {
  /**
   * These are the placeholders (the pre-text that disappears when you
   * type something) of the input elements in the blank spots of the
   * phrase.
   * Analagous to Level-1's "root words"
   */
  placeholder: string;

  disambig: Disambig;
  target: Declension;

  /**
   * These are the correct forms of the placeholder words.
   * They are derived using Az.ts from disambigs and targets
   * The length must be the same as placeholders' length.
   */
  correctAnswer: string;

}

export type Question = {
  /**
   * The phrase, where each time the string is broken up into
   * different elements of the array, that represents a gap
   * in the UI, where the correct form is wanted.
   * An empty string means a place for an input.
   */
  phrase: string[];
  wordFields: WordField[];
};

export function QuestionFactory(
  az: AzClass, phrase: string[], wordFields: WordField[]
): Question | number {

  let question: Question = {
    phrase: [...phrase],
    wordFields: [...wordFields]
  };

  return question;
}


export function WordFieldFactory(az: AzClass, word: string, disambig: Disambig, target: Declension): WordField | false {
  let azS = new AzService();

  let infl = azS.inflectNoun(az, word, disambig, target);
  if (!infl) return false;

  let inflLemma = azS.inflectNoun(az, word, disambig, {CAse: 'nomn', NMbr: 'sing'});
  if (!inflLemma) return false;

  return {
    placeholder: inflLemma.word,
    disambig: disambig,
    target: target,
    correctAnswer: infl.word,
  };
}
