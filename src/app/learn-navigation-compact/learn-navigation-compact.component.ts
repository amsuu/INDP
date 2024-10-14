import { Component, Input } from '@angular/core';
import { CommonModule } from "@angular/common";
@Component({
  selector: 'app-learn-navigation-compact',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './learn-navigation-compact.component.html',
  styleUrl: './learn-navigation-compact.component.scss'
})
export class LearnNavigationCompactComponent {
  @Input() structure: string[] = [ 'Cases', 'Meaning of Cases'];
}
