import { AzService } from "../az/az.service";
import { AzClass } from "../az/azts";
import { Disambig, Declension, DeclensedWord } from "./level-types";

export type Quiz = {
  author: string,
  title: string,
  questions: Question[],
};

export type Question = {
  /**
   * The phrase, where each time the string is broken up into
   * different elements of the array, that represents a gap
   * in the UI, where the correct form is wanted.
   * An empty string means a place for an input.
   */
  phrase: string[];

  /**
   * These are the placeholders (the pre-text that disappears when you
   * type something) of the input elements in the blank spots of the
   * phrase.
   * Analagous to Level-1's "root words"
   */
  placeholders: string[];

  disambigs: Disambig[];
  targets: Declension[];

  /**
   * These are the correct forms of the placeholder words.
   * They are derived using Az.ts from disambigs and targets
   * The length must be the same as placeholders' length.
   */
  correctAnswers: string[];
};

export function QuestionFactory(
  az: AzClass, phrase: string[], words: string[],
  disambigs: Disambig[], targets: Declension[]
): Question | number {
  let azS = new AzService();

  let placeholders: string[] = [];
  let correctAnswers: string[] = [];

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const disambig = disambigs[i];
    const target = targets[i];

    let infl = azS.inflectNoun(az, word, disambig, target);
    if (!infl) return i;

    placeholders.push(word);
    correctAnswers.push(infl.word);
  }

  let question: Question = {
    phrase: [...phrase],
    placeholders: [...placeholders],
    disambigs: [...disambigs],
    targets: [...targets],
    correctAnswers: [...correctAnswers],
  };

  return question;
}
