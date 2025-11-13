import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-landingPage',
    standalone: true,
    imports: [CommonModule],
    template: `
    <section>
        <h1>Sakura Ramen</h1>
        <h2>Best Ramen in Town</h2>
    </section>
    `,
    styleUrls: ['./landingPage.component.scss']
})

export class LandingPageComponent { }