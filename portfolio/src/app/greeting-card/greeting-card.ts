import { Component, input } from '@angular/core';
import {
  MatCard,
  MatCardHeader,
  MatCardContent,
  MatCardFooter,
  MatCardTitle,
} from '@angular/material/card';
import { MatChip, MatChipSet } from '@angular/material/chips';
import { MatAnchor } from '@angular/material/button';

@Component({
  selector: 'app-greeting-card',
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardFooter,
    MatCardTitle,
    MatChipSet,
    MatChip,
    MatAnchor,
  ],
  templateUrl: './greeting-card.html',
  styleUrl: './greeting-card.scss',
})
export class GreetingCard {}
