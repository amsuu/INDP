import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

export type Slovnik = {
  // data===========||
  // words========||||
  //              \/\/
  wordList: string[][],
  searchIndex: {
    "isv-src": string[][][],
    isv: string[][][],
    en: string[][][],
    ru: string[][][],
    be: string[][][],
    uk: string[][][],
    pl: string[][][],
    cs: string[][][],
    sk: string[][][],
    sl: string[][][],
    hr: string[][][],
    sr: string[][][],
    mk: string[][][],
    bg: string[][][],
    //        /\/\/\
    //        ||||||
    // words ==|||||
    // id&data ==|||
    // data========|
  }
}

@Injectable({
  providedIn: 'root',
})
export class SlovnikService {

  private slovnikURL = 'https://interslavic-dictionary.com/data/basic.json';

  constructor(private http: HttpClient) { }

  getSlovnik(): Observable<Slovnik> {
    let slovnik = this.http.get<Slovnik>(this.slovnikURL);
    console.table(slovnik);
    return slovnik;
  }


}
