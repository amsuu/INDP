import { Injectable } from '@angular/core';
import { ThemeService } from '../settings/theme.service';
import { HueService } from '../settings/hue.service';

// this file is OOP hell...

type AppropriateColoring = {
  correct: OverridableThemeableColoring,
  incorrect: OverridableThemeableColoring,
}
const overrideableThemes = ["light", "dark"];
// ^ These should match v
type OverridableThemeableColoring = {
  light: OverridableColoring,
  dark: OverridableColoring,
};
type OverridableColoring = {
  default: Coloring,
  hueOverrides?: HueOverride[],
};
type HueOverride = {
	hue: string,
  override: Coloring,
};
type Coloring = {
  text: string,
  bg: {
    hue: string,
    sl: string,
  },
};

const DEFAULTCOLORING = {
  correct: {
    light: {
      default: {
        text: 'text',
        bg: {
          hue: 'green',
          sl: 'secondary',
        }
      },
      slOverrides: [],
    },
    dark: {
      default: {
        text: 'background',
        bg: {
          hue: 'green',
          sl: 'accent',
        },
      },
      slOverrides: [],
    },
  },
  incorrect: {
    light: {
      default: {
        text: 'text',
        bg: {
          hue: 'red',
          sl: 'secondary',
        },
      },
      slOverrides: [],
    },
    dark: {
      default: {
        text: 'background',
        bg: {
          hue: 'red',
          sl: 'accent',
        },
      },
      slOverrides: [],
    },
  },
};

@Injectable({
  providedIn: 'root'
})
export class AnswerButtonColoringService {

  private defaultColoring;

  constructor(private hue: HueService, private theme: ThemeService) {
    this.defaultColoring = DEFAULTCOLORING;
  }
  copyDefaultColoring() {
    return JSON.parse(JSON.stringify(this.defaultColoring));
  }

  // appends a style to an elements, adding a semicolon if needed
  addStyle(el: HTMLElement, css: string) {

    // auto semicolon and trimspace at end, only if needed
    while (css[css.length-1] == ' ') {
      css = css.substring(0, css.length-1);
    }
    if (css[css.length-1] === ';') {
      css += ';';
    }

    el.setAttribute('style', `${el.getAttribute('style') || ''} ${css}`);
  }

  setBackgroundHSL(el: HTMLElement, hue: string, sl: string) {
    this.addStyle(el, `background-color: hsl(var(--hue-${hue}), var(--${sl}-sl))`);
  }
  setForegroundVar(el: HTMLElement, color: string) {
    this.addStyle(el, `color: var(--${color})`)
  }

  // this mess of a chain of functions basically
  // takes in the AppropriateColoring type and each
  // function in the chain removes one layer -- be it
  // a theme, an override, correct-incorrects, etc.
  colorAppropriately(el: HTMLElement, correct: boolean /* for now */, opts: AppropriateColoring = DEFAULTCOLORING) {
    let style = '';

    if (correct) {
      this.colorThemeable(el, opts.correct);
    } else {
      this.colorThemeable(el, opts.incorrect);
    }
  }
  // chain
  colorThemeable(el: HTMLElement, opts: OverridableThemeableColoring) {

    let usedOverrideableColoring: OverridableColoring = this.theme.isCurrentThemeName("dark") ? opts.dark : opts.light;

    this.colorHueOverrideable(el, usedOverrideableColoring);

  }
  // chain
  colorHueOverrideable(el: HTMLElement, opts: OverridableColoring) {

    let coloring: Coloring = opts.default;

    if (opts.hueOverrides) {
      for (let i = 0; i < opts.hueOverrides.length; i++) {
        const hueOverride: HueOverride = opts.hueOverrides[i];

        if (this.hue.isCurrentHueName(hueOverride.hue)) {
          coloring = hueOverride.override;
        }
      }
    }

    this.colorColoring(el, coloring);

  }
  // chain
  colorColoring(el: HTMLElement, coloring: Coloring) {

    let style = `
      color: var(--${coloring.text}) !important;
      background-color: hsl(var(--hue-${coloring.bg.hue}), var(--${coloring.bg.sl}-sl)) !important;
    `;

    this.addStyle(el, style);
  }
}
