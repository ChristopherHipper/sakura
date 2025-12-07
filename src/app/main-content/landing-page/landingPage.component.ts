/* mit import sorge ich dafür das ich inhalte des importes auf dieser seite verwenden kann
man kann hier viele components importieren und in der app.components dann nur die haupt component einbinden
(in der landing page ist die navbar mit drin. Die muss dann nicht extra in der app.component importiert werden) */

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';

/* in imports muss genau der selbe name wie oben stehen 
in den templates kann ich HTML code oder eine HTML datei verlinken 
@ vor irgendwas ist ein decorator. 
Ist eine function die um die class unten ausgeführt wird um sie zusätzlich mit informationen zu füllen*/
@Component({
    selector: 'app-landingPage', // der Name der componenent um sie später durch ein normalen HTML tag in der HTML aufrufen zu können
    standalone: true,
    imports: [CommonModule, NavbarComponent], // die obrigen components importieren um sie zu benutzen
    template: `
    <section class="fontRaleway">
        <app-navbar></app-navbar>
        <h1>SAKURA RAMEN</h1>
        <h2>Best Ramen in Town</h2>
    </section>
    `,
    styleUrls: ['./landingPage.component.scss']
})

// ist immer der name den ich in den import eintragen muss. Export um sie überall verwenden zu können
export class LandingPageComponent { 
    //TS code...
}