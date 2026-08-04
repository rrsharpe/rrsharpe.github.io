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
      const stored = localStorage.getItem('theme');
      if (stored === 'dark' || stored === 'light') {
        this.isDarkMode.set(stored === 'dark');
      } else {
        this.isDarkMode.set(
          typeof window.matchMedia === 'function' &&
            window.matchMedia('(prefers-color-scheme: dark)').matches,
        );
      }
    }
    effect(() => {
      const dark = this.isDarkMode();
      this.document.documentElement.style.colorScheme = dark ? 'dark' : 'light';
      if (isPlatformBrowser(this.platformId)) {
        localStorage.setItem('theme', dark ? 'dark' : 'light');
      }
    });
  }

  toggleTheme(): void {
    this.isDarkMode.update((v) => !v);
  }
}
