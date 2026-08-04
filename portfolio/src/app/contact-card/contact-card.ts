import { Component, signal } from '@angular/core';
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardTitle,
  MatCardSubtitle,
} from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';

// To update: run btoa('your@email.com') in the browser console and paste the result here.
const ENCODED_EMAIL = 'cnlhbnJzaGFycGUxQGdtYWlsLmNvbQ==';

@Component({
  selector: 'app-contact-card',
  imports: [
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatIcon,
    MatButton,
  ],
  templateUrl: './contact-card.html',
  styleUrl: './contact-card.scss',
})
export class ContactCard {
  readonly revealedEmail = signal<string | null>(null);

  revealEmail(): void {
    this.revealedEmail.set(atob(ENCODED_EMAIL));
  }
}
