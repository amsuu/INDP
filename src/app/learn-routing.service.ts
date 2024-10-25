import { Injectable } from '@angular/core';

type Redirect = {
  path: string,
  redirectTo: string,
  pathMatch: string
} | [];
type Path = {
  path: string,
  component: any
} | [];


@Injectable({
  providedIn: 'root'
})
export class LearnRoutingService {

  defaults: Redirect[] = [];
  paths: Path[] = [];

  constructor() {

  }

  nonURLSafeChars = /[\ \;\/\?\:\@\=\&\"\<\>\#\%\{\}\|\^\~\[\]\`]/gi;

  private trimChar(str: string, char: string) {
    return str.replace(
      new RegExp(
        `(^\\${char}+)|(\\${char}+$)`,"g"
      ),
      ""
    );
  }
  routify(str: string): string {
    str = str.trim().toLowerCase();
    let newStr = "";

    for (let i = 0; i < str.length; i++) {
      const ch = str[i];
      if (ch.match(this.nonURLSafeChars)) {
        newStr += '-';
      } else {
        newStr += ch;
      }
    }

    return newStr;
  }
}
