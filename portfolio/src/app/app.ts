import { Component, signal, inject, effect, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatToolbar } from '@angular/material/toolbar';
import { MatButton, MatAnchor, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { GreetingCard } from './greeting-card/greeting-card';
import { ExperienceCard } from './experience-card/experience-card';
import { ContactCard } from './contact-card/contact-card';
import { jobs } from './job-descriptions';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatToolbar,
    MatButton,
    MatAnchor,
    MatIconButton,
    MatIcon,
    GreetingCard,
    ExperienceCard,
    ContactCard,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);

  readonly isDarkMode = signal(false);
  readonly jobs = jobs;

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      this.isDarkMode.set(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    effect(() => {
      this.document.documentElement.style.colorScheme = this.isDarkMode() ? 'dark' : 'light';
    });
  }

  toggleTheme(): void {
    this.isDarkMode.update(v => !v);
  }
}
