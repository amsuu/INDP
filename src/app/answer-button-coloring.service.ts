import { Injectable } from '@angular/core';
import { ThemeService } from './theme.service';
import { HueService } from './hue.service';

type AppropriateColoring = {
  correct: OverridableThemeableColoring,
  incorrect: OverridableThemeableColoring,
}
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
  override: ThemeableColoring[],
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

  function colorThemeable(el: HTMLElement, opts: OverridableThemeableColoring) {

    for (let i = 0; i < opts.length; i++) {
      let theme = opts[i];

      if (hueName === theme.hue) {
        colors.bg.hue = this.theme.isCurrentTheme("dark") ? theme.slOverride.dark : theme.slOverride.light;
      }
    }

    style += `color: var(--${colors.text}) !important;`;
    style += `background-color: hsl(var(--hue-${colors.bg.hue}), var(--${colors.bg.sl}-sl)) !important;`

    this.addStyle(el, style);
  }


}
