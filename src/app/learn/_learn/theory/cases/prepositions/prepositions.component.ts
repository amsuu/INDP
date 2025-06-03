import { Component } from '@angular/core';
import { LearnPageTemplateComponent } from "../../../../page-template/page-template.component";
import { RouterLink, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-prepos-theory-learn-page',
  standalone: true,
  imports: [ LearnPageTemplateComponent, RouterLink, RouterOutlet ],
  templateUrl: './prepositions.component.html',
  styleUrl: './prepositions.component.scss'
})
export class _Component {

}
