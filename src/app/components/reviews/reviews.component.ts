import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Review } from '../../data';
import { Reviews } from '../../mock-data';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css'
})
export class ReviewsComponent {
  reviews: Review[] = Reviews;

}
