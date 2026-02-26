import { Question } from "../level-2-types";

export function convertPhraseIndex(question: Question, phraseIdx: number) {
  let tracker = -1;
  for (let i = 0; i < question.phrase.length; i++) {
    if (question.phrase[i] === "") tracker++;
    if (i === phraseIdx) break;
  }
  return tracker;
}

export function getPlaceholderFromPhrase(question: Question, phraseIdx: number) {
  let i = convertPhraseIndex(question, phraseIdx);
  return question.wordFields[i].placeholder;
}
