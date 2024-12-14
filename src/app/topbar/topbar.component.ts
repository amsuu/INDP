import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-topbar',
    templateUrl: './topbar.component.html',
    styleUrls: ['./topbar.component.scss'],
    standalone: true,
    imports: [RouterLink, RouterLinkActive],
})
export class TopbarComponent {

}
