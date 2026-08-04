import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbar } from '@angular/material/toolbar';
import { MatButton, MatAnchor } from '@angular/material/button';
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
    GreetingCard,
    ExperienceCard,
    ContactCard,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('Ryan Sharpe');

  readonly jobs = jobs;
}
