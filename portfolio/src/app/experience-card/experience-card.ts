import { Component, computed, input } from '@angular/core';
import {
  MatCard,
  MatCardHeader,
  MatCardContent,
  MatCardFooter,
  MatCardTitle,
} from '@angular/material/card';
import { MatChipSet, MatChip } from '@angular/material/chips';
import { JobDescription } from '../job-descriptions';
import dayjs from 'dayjs';

@Component({
  selector: 'app-experience-card',
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardFooter,
    MatCardTitle,
    MatChipSet,
    MatChip,
  ],
  templateUrl: './experience-card.html',
  styleUrl: './experience-card.scss',
})
export class ExperienceCard {
  readonly job = input.required<JobDescription>();

  readonly dateString = computed(() => {
    const job = this.job();
    const endDate = job.endDate === 'Present' ? new Date(Date.now()) : job.endDate;
    const years = dayjs(endDate).diff(job.startDate, 'years');
    const months = dayjs(endDate).diff(job.startDate, 'months') % 12;
    const startDateText = dayjs(job.startDate).format('MMM YYYY');
    const endDateText =
      job.endDate === 'Present' ? 'Present' : dayjs(job.endDate).format('MMM YYYY');
    return `${startDateText} — ${endDateText} ${years} years ${months} months`;
  });
}
