import { Component } from '@angular/core';
import { SegmentedSingleSelectionComponent } from './segmented-single-selection/segmented-single-selection.component';
import { SegmentedMultipleSelectionComponent } from './segmented-multiple-selection/segmented-multiple-selection.component';
import { ThemeSelectorComponent } from './theme-selector/theme-selector.component';
import { HueSelectorComponent } from './hue-selector/hue-selector.component';

@Component({
    selector: 'app-settings',
    standalone: true,
    imports: [SegmentedSingleSelectionComponent, SegmentedMultipleSelectionComponent, ThemeSelectorComponent, HueSelectorComponent],
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {

}
