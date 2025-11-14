/* mit import sorge ich dafür das ich inhalte des importes auf dieser seite verwenden kann
man kann hier viele components importieren und in der app.components dann nur die haupt component einbinden
(in der landing page ist die navbar mit drin. Die muss dann nicht extra in der app.component importiert werden) */

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';

/* in imports muss genau der selbe name wie oben stehen 
in den templates kann ich HTML code oder eine HTML datei verlinken */
@Component({
    selector: 'app-landingPage',
    standalone: true,
    imports: [CommonModule, NavbarComponent],
    template: `
    <section class="fontRaleway">
        <app-navbar></app-navbar>
        <h1>Sakura Ramen</h1>
        <h2>Best Ramen in Town</h2>
    </section>
    `,
    styleUrls: ['./landingPage.component.scss']
})

// ist immer der name den ich in den import eingetragen muss
export class LandingPageComponent { }