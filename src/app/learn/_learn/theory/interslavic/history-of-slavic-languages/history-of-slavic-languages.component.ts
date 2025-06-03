import { Component } from '@angular/core';
import { LearnPageTemplateComponent } from "../../../../page-template/page-template.component";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-history-of-slavic-languages',
  standalone: true,
  imports: [ LearnPageTemplateComponent, RouterLink ],
  templateUrl: './history-of-slavic-languages.component.html',
  styleUrl: './history-of-slavic-languages.component.scss'
})
export class _Component {

}
