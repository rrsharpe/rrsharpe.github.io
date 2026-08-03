import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GreetingCard } from './greeting-card/greeting-card';
import { ExperienceCard } from './experience-card/experience-card';
import { jobs } from './job-descriptions';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GreetingCard, ExperienceCard],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('Ryan Sharpe');

  readonly jobs = jobs;
}
