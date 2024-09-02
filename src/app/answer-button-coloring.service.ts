import { Injectable } from '@angular/core';
import { ThemeService } from './theme.service';
import { HueService } from './hue.service';

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
  override: ThemeableColoring,
};
type ThemeableColoring = {
  light: Coloring,
  dark: Coloring,
};
type Coloring = {
  text: string,
  bg: {
    hue: string,
    sl: string,
  },
};


@Injectable({
  providedIn: 'root'
})
export class AnswerButtonColoringService {

  constructor(private hue: HueService, private theme: ThemeService) { }

  addStyle(el: HTMLElement, css: string) {
    el.setAttribute('style', `${el.getAttribute('style') || ''} ${css}`);
  }

  setForeground(el: HTMLElement, color: string) {
    this.addStyle(el, `color: ${color};`)
  }

  colorAppropriately(el: HTMLElement, correct: boolean /* for now */, opts:AppropriateColoring = {
    correct: {
      light: {
        default: {
          text: 'text',
          bg: {
            hue: 'green',
            sl: 'secondary',
          }
        },
      },
      dark: {
        default: {
          text: 'background',
          bg: {
            hue: 'green',
            sl: 'accent',
          },
        },
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
      },
      dark: {
        default: {
          text: 'background',
          bg: {
            hue: 'red',
            sl: 'secondary',
          },
        },
      },
    },
  }) {
    let style = '';

    if (correct) {
      this.colorThemeable(el, opts.correct);
    } else {
      this.colorThemeable(el, opts.incorrect);
    }
  }

  colorThemeable(el: HTMLElement, opts: OverridableThemeableColoring) {

    let usedOverrideableColoring: OverridableColoring = this.theme.isCurrentThemeName("dark") ? opts.dark : opts.light;

    this.colorHueOverrideable(el, usedOverrideableColoring);

  }

  colorHueOverrideable(el: HTMLElement, opts: OverridableColoring) {

    let coloring: Coloring = opts.default;

    if (opts.hueOverrides) {
      for (let i = 0; i < opts.hueOverrides.length; i++) {
        const hueOverride: HueOverride = opts.hueOverrides[i];

        if (this.hue.isCurrentHueName(hueOverride.hue)) {
          coloring = this.theme.isCurrentThemeName("dark") ? hueOverride.override.dark : hueOverride.override.light;
        }
      }
    }

    this.colorColoring(el, coloring);

  }

  colorColoring(el: HTMLElement, coloring: Coloring) {

    let style = `
      color: var(--${coloring.text}) !important;
      background-color: hsl(var(--hue-${coloring.bg.hue}), var(--${coloring.bg.sl}-sl)) !important;
    `;

    this.addStyle(el, style);
  }
}
