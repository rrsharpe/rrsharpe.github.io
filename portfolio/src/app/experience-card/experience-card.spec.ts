import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceCard } from './experience-card';
import { JobDescription } from '../job-descriptions';

const mockJob: JobDescription = {
  employer: 'Test Employer',
  jobTitle: 'Test Title',
  location: 'Test Location',
  description: 'Test description',
  frameworks: [],
  languages: [],
  bullets: [],
  startDate: new Date('2020-01-01'),
  endDate: new Date('2021-01-01'),
  responsibilities: [],
};

describe('ExperienceCard', () => {
  let component: ExperienceCard;
  let fixture: ComponentFixture<ExperienceCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienceCard],
    }).compileComponents();

    fixture = TestBed.createComponent(ExperienceCard);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('job', mockJob);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
